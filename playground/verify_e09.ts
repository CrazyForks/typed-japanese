import chapter from "./src/tutorial/chapters/e09";
import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

const __dirname = process.cwd();
const libIndex = path.resolve(__dirname, "../src/index").replace(/\\/g,"/");
let total=0, fail=0;
for (const p of chapter.points) for (const ex of p.examples) {
  total++;
  let code = ex.code.replace(/from "typed-japanese"/g, `from "${libIndex}"`);
  const m = [...code.matchAll(/type\s+([^\s=]+)\s*=/g)];
  const lastName = m[m.length-1][1];
  const probe = code + `\nexport const __out: ${lastName} = null as any;`;
  const tmp = path.join(__dirname, `.snip_${total}.ts`);
  fs.writeFileSync(tmp, probe);
  const program = ts.createProgram([tmp], { strict:false, noEmit:true, skipLibCheck:true, moduleResolution: ts.ModuleResolutionKind.Bundler, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ESNext });
  const checker = program.getTypeChecker();
  const diags = ts.getPreEmitDiagnostics(program).filter(d=> (d.file?.fileName||"").includes(".snip_"));
  const sf = program.getSourceFile(tmp)!;
  let resolved="?";
  sf.forEachChild(node=>{
    if (ts.isVariableStatement(node)) {
      const decl = node.declarationList.declarations[0];
      if (decl.name.getText()==="__out") resolved = checker.typeToString(checker.getTypeAtLocation(decl));
    }
  });
  fs.unlinkSync(tmp);
  const ok = resolved === `"${ex.jp}"` && diags.length===0;
  if (!ok) { fail++;
    console.log("FAIL", ex.jp, "=> resolved:", resolved);
    diags.slice(0,4).forEach(d=>console.log("  diag:", ts.flattenDiagnosticMessageText(d.messageText,"\n")));
  } else console.log("OK", ex.jp);
}
console.log(`\n${total-fail}/${total} passed`);
