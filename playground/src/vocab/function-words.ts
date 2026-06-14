import type { VocabEntry } from "./types";

/**
 * Hand-maintained grammar vocabulary: particles, the copula, common auxiliary
 * suffixes, demonstratives and interrogatives. These give readings/meanings for
 * the grammatical glue in sentences (は = wa, です = desu, …), complementing the
 * content words authored under entries/.
 */
const e = (
  word: string,
  reading: string,
  romaji: string,
  pos: VocabEntry["pos"],
  en: string,
  zh: string
): VocabEntry => ({ word, reading, romaji, pos, en, zh });

export const FUNCTION_WORDS: VocabEntry[] = [
  // particles
  e("は", "は", "wa", "particle", "topic marker", "提示主题"),
  e("が", "が", "ga", "particle", "subject marker", "主语标记"),
  e("を", "を", "o", "particle", "direct-object marker", "宾语标记"),
  e("に", "に", "ni", "particle", "to / at / for (target, time)", "向、在、给(对象、时间)"),
  e("へ", "へ", "e", "particle", "to / toward (direction)", "向、往(方向)"),
  e("で", "で", "de", "particle", "by / at (means, place of action)", "用、在(方式、场所)"),
  e("と", "と", "to", "particle", "and / with / that (quote)", "和、与、(引用)"),
  e("から", "から", "kara", "particle", "from / because", "从、因为"),
  e("まで", "まで", "made", "particle", "until / as far as", "到、为止"),
  e("よ", "よ", "yo", "particle", "emphasis (sentence-final)", "句末强调"),
  e("ね", "ね", "ne", "particle", "seeking agreement (right?)", "寻求认同(…吧)"),
  e("か", "か", "ka", "particle", "question marker", "疑问"),
  e("よね", "よね", "yone", "particle", "emphasis + agreement", "强调并寻求认同"),
  e("の", "の", "no", "particle", "possessive / nominalizer", "的、名词化"),
  e("も", "も", "mo", "particle", "also / even", "也、连…都"),

  // copula
  e("です", "です", "desu", "copula", "is/are (polite)", "是(礼貌)"),
  e("だ", "だ", "da", "copula", "is/are (plain)", "是(简体)"),
  e("でした", "でした", "deshita", "copula", "was/were (polite)", "(过去)是"),
  e("ではありません", "ではありません", "dewa arimasen", "copula", "is/are not (polite)", "不是(礼貌)"),
  e("である", "である", "de aru", "copula", "is/are (written)", "是(书面)"),

  // verbal suffixes / auxiliaries
  e("ます", "ます", "masu", "suffix", "polite non-past", "礼貌体(现在/将来)"),
  e("ました", "ました", "mashita", "suffix", "polite past", "礼貌体过去"),
  e("ません", "ません", "masen", "suffix", "polite negative", "礼貌体否定"),
  e("ませんでした", "ませんでした", "masen deshita", "suffix", "polite past negative", "礼貌体过去否定"),
  e("ない", "ない", "nai", "suffix", "plain negative", "简体否定"),
  e("た", "た", "ta", "suffix", "plain past", "简体过去"),
  e("て", "て", "te", "suffix", "te-form (connective)", "て形(连接)"),
  e("たい", "たい", "tai", "suffix", "want to (do)", "想(做)"),
  e("でしょう", "でしょう", "deshou", "suffix", "probably / right?", "大概、…吧"),
  e("だろう", "だろう", "darou", "suffix", "probably (plain)", "大概(简体)"),
  e("ましょう", "ましょう", "mashou", "suffix", "let's (do)", "…吧(劝诱)"),
  e("ください", "ください", "kudasai", "suffix", "please (do)", "请(做)"),

  // conditionals / connectives
  e("なら", "なら", "nara", "particle", "if (it's the case that)", "如果…的话"),
  e("たら", "たら", "tara", "particle", "if / when", "如果、…的时候"),
  e("れば", "れば", "reba", "particle", "if (conditional)", "如果(条件)"),
  e("ので", "ので", "node", "particle", "because (soft)", "因为(委婉)"),
  e("けど", "けど", "kedo", "particle", "but / although", "但是、虽然"),
  e("のに", "のに", "noni", "particle", "although (unexpected)", "却、明明"),
  e("し", "し", "shi", "particle", "and (listing reasons)", "又…又…"),

  // demonstratives
  e("これ", "これ", "kore", "pronoun", "this (thing)", "这个"),
  e("それ", "それ", "sore", "pronoun", "that (near you)", "那个"),
  e("あれ", "あれ", "are", "pronoun", "that (over there)", "那个(远)"),
  e("この", "この", "kono", "prefix", "this (+ noun)", "这(个)…"),
  e("その", "その", "sono", "prefix", "that (+ noun)", "那(个)…"),
  e("あの", "あの", "ano", "prefix", "that (+ noun, far)", "那(个)…(远)"),
  e("ここ", "ここ", "koko", "pronoun", "here", "这里"),
  e("そこ", "そこ", "soko", "pronoun", "there", "那里"),
  e("あそこ", "あそこ", "asoko", "pronoun", "over there", "那里(远)"),
  e("こう", "こう", "kou", "adverb", "this way / like this", "这样"),
  e("そう", "そう", "sou", "adverb", "that way / so", "那样、так"),
  e("ああ", "ああ", "aa", "adverb", "that way (far)", "那样(远)"),
  e("どう", "どう", "dou", "adverb", "how / what way", "怎么、如何"),

  // interrogatives
  e("何", "なに", "nani", "pronoun", "what", "什么"),
  e("なに", "なに", "nani", "pronoun", "what", "什么"),
  e("なぜ", "なぜ", "naze", "adverb", "why", "为什么"),
  e("なんで", "なんで", "nande", "adverb", "why (casual)", "为什么(口语)"),
  e("どうして", "どうして", "doushite", "adverb", "why / how come", "为什么"),
  e("いつ", "いつ", "itsu", "pronoun", "when", "什么时候"),
  e("どこ", "どこ", "doko", "pronoun", "where", "哪里"),
  e("だれ", "だれ", "dare", "pronoun", "who", "谁"),
  e("誰", "だれ", "dare", "pronoun", "who", "谁"),
  e("どんな", "どんな", "donna", "prefix", "what kind of", "什么样的"),
  e("どれ", "どれ", "dore", "pronoun", "which one", "哪个"),
  e("いくら", "いくら", "ikura", "pronoun", "how much", "多少钱"),

  // very common adverbs that appear as glue
  e("もっと", "もっと", "motto", "adverb", "more", "更"),
  e("一緒に", "いっしょに", "issho ni", "adverb", "together", "一起"),
  e("とても", "とても", "totemo", "adverb", "very", "非常"),
  e("よく", "よく", "yoku", "adverb", "often / well", "经常、好好地"),
  e("たくさん", "たくさん", "takusan", "adverb", "a lot", "很多"),
  e("ちょっと", "ちょっと", "chotto", "adverb", "a little", "稍微"),
  e("まだ", "まだ", "mada", "adverb", "still / not yet", "还、尚未"),
  e("もう", "もう", "mou", "adverb", "already", "已经"),
];
