// ملف البيانات — يُحمَّل قبل index.html
// ═══════════════════════════════════════════════════════════════════════════
// المنهج: Unit 1 (جسور / مباني / Maglev / قواعد) + Unit 2 (معدات / حوادث / أفعال / فضاء)
//
// ─── صيغة الكلمة (BUILTIN_WORDS) ───────────────────────────────────────────
// الحقول المطلوبة بس: id, word, translation, catId, type
// وكل تصريفات الكلمة بتتحط في forms (ودي اللي بتشغّل تدريب الأزمنة والتحويل):
//   F(form, type, translation, sentence, sentenceTrans)
// أنواع التصريف: verb · past simple · past participle · ing form · 3rd person
//                noun · adjective · adverb · plural
// لو التصريف ليه sentence فيها نفس الشكل، التطبيق بيعمل منها سؤال "كمّل الجملة" تلقائي.
//
// في الملف ده فيه دالتين مساعدتين:
//   W(id, word, tr, catId, type, {def, ex, syn, forms})   كلمة عادية
//   V(id, base, tr, catId, past, pp, ing, {sPast, sPP, more, def})   فعل (بيعمل V2/V3/-ing/3rd تلقائي)
//
// ─── تمارين جاهزة (BUILTIN_EXERCISES) ──────────────────────────────────────
//   { id, kind:"tense", tense:"past|perfect|future|forms", sentence, answer, distractors, explain, tr, catId }
//   { id, kind:"convert", pos:"noun|adj|verb|adv",          sentence, answer, distractors, explain, tr, catId }
// answer ممكن تبقى مصفوفة لو فيه أكتر من إجابة صح.
//
// ملحوظة: بنك أسئلة الأزمنة العام (89 سؤال) والشرح في ملف grammar_content.js — مش هنا.
// ═══════════════════════════════════════════════════════════════════════════

// loadMwData بيعمل unshift لكل تصنيف، فبنعكس الترتيب عشان يظهروا زي ما هما مكتوبين
const BUILTIN_CATS = [
  { id: "cat_b", name: "Unit 1 — Bridges (جسور وأنفاق)" },
  { id: "cat_x", name: "Unit 1 — Dimensions (الأبعاد)" },
  { id: "cat_u", name: "Unit 1 — Buildings & Units (مباني ووحدات)" },
  { id: "cat_m", name: "Unit 1 — Maglev Train (قطار الماجليف)" },
  { id: "cat_n", name: "Unit 1 — Grammar Notes (قواعد)" },
  { id: "cat_t", name: "Unit 2 — Tools & Equipment (معدات)" },
  { id: "cat_i", name: "Unit 2 — Incidents & Cars (حوادث وعربيات)" },
  { id: "cat_d", name: "Unit 2 — Damage Verbs (أفعال التلف)" },
  { id: "cat_a", name: "Unit 2 — Action Verbs (أفعال)" },
  { id: "cat_s", name: "Unit 2 — Space & Astronomy (فضاء وفلك)" }
].reverse();

const BUILTIN_WORDS = (function () {
  const F = (form, type, tr, sentence, sentenceTrans) => ({ form, type, translation: tr || "", when: "", sentence: sentence || "", sentenceTrans: sentenceTrans || "" });
  const W = (id, word, tr, catId, type, o) => {
    o = o || {};
    return { id, word, translation: tr, catId, type, baseForm: word, baseFormTranslation: tr,
      displayedForm: "", displayedFormTranslation: "", displayedFormSentence: "", displayedFormSentenceTrans: "",
      pronunciation: "", localPron: "", definition: o.def || "", examples: o.ex || "", synonyms: o.syn || "", antonyms: o.ant || "",
      forms: o.forms || [], addedAt: 0 };
  };
  const third = b => {
    const t = b.split(" "), w = t[0];
    t[0] = /(s|x|z|ch|sh|o)$/.test(w) ? w + "es" : /[^aeiou]y$/.test(w) ? w.slice(0, -1) + "ies" : w + "s";
    return t.join(" ");
  };
  // فعل: past / pp ممكن يبقوا مصفوفة لو فيه شكلين صح (burnt / burned)
  const V = (id, base, tr, catId, past, pp, ing, o) => {
    o = o || {};
    const fs = [];
    [].concat(past).forEach((p, i) => fs.push(F(p, "past simple", "", i ? "" : o.sPast, i ? "" : o.sPastTr)));
    [].concat(pp).forEach((p, i) => fs.push(F(p, "past participle", "", i ? "" : o.sPP, i ? "" : o.sPPTr)));
    if (ing) fs.push(F(ing, "ing form"));
    fs.push(F(o.s || third(base), "3rd person"));
    (o.more || []).forEach(x => fs.push(x));
    return W(id, base, tr, catId, "verb", { def: o.def, ex: o.ex, syn: o.syn, forms: fs });
  };

  return [
    // ═══════════ Unit 1 — Bridges ═══════════
    W("b01", "specification", "مواصفات (مواصفة)", "cat_b", "noun", {
      def: "a detailed description of how something should be done, made, etc.",
      forms: [F("specifications", "plural"),
        F("specify", "verb", "يحدد / يوصّف", "The plans specify the type of steel.", "الخطة بتحدد نوع الصلب."),
        F("specific", "adjective", "محدد", "We need a specific size.", "محتاجين مقاس محدد."),
        F("specifically", "adverb", "تحديدًا")] }),
    W("b02", "dimension", "بُعد (أبعاد)", "cat_b", "noun", {
      def: "a measurement of something in a particular direction, especially its height, length, width.",
      forms: [F("dimensions", "plural"), F("dimensional", "adjective", "ذو أبعاد")] }),
    W("b03", "cable", "كابل / سلك فولاذي", "cat_b", "noun", {
      def: "a thick, strong metal rope.", forms: [F("cables", "plural")] }),
    W("b04", "deck", "سطح الجسر (اللي بتمشي عليه العربيات)", "cat_b", "noun", {
      def: "part of the bridge that cars drive on.", forms: [F("decks", "plural")] }),
    W("b05", "pylon", "برج الجسر (عمود ضخم)", "cat_b", "noun", {
      def: "a tall tower that holds the bridge up and carries the heavy cables.", forms: [F("pylons", "plural")] }),
    W("b06", "pier", "دعامة الجسر (ركيزة)", "cat_b", "noun", {
      def: "a tall, strong column which holds the bridge up.", forms: [F("piers", "plural")] }),
    W("b07", "span", "بحر الجسر (المسافة من طرف لطرف)", "cat_b", "noun", {
      def: "the distance from one end of the bridge to the other.", forms: [F("spans", "plural")] }),
    W("b08", "tunnel", "نفق", "cat_b", "noun", { forms: [F("tunnels", "plural")] }),
    W("b09", "outer", "خارجي", "cat_b", "adjective", { ant: "inner" }),
    W("b10", "inner", "داخلي", "cat_b", "adjective", { ant: "outer" }),
    W("b11", "reinforced", "مقوّى (مسلّح)", "cat_b", "adjective", {
      ex: "The tunnel is made of reinforced concrete.",
      forms: [F("reinforce", "verb", "يقوّي / يسلّح", "Engineers reinforce the concrete with steel bars.", "المهندسين بيقووا الخرسانة بحديد التسليح."),
        F("reinforcement", "noun", "تقوية / تسليح")] }),
    W("b12", "concrete", "خرسانة", "cat_b", "noun", {
      ex: "The deck is made of concrete." }),
    W("b13", "length", "طول", "cat_b", "noun", {
      ex: "The bridge is 2 km long.\nThe bridge has a length of 2 km.\nThe length of the bridge is 2 km.",
      forms: [F("long", "adjective", "طويل", "The bridge is 2 km long.", "الكوبري طوله 2 كيلو."),
        F("lengthen", "verb", "يطوّل / يزوّد الطول", "They will lengthen the bridge by 500 m.", "هيزودوا طول الكوبري 500 متر.")] }),
    W("b14", "Mediterranean", "البحر المتوسط", "cat_b", "noun", {}),
    W("b15", "elegant", "أنيق", "cat_b", "adjective", {
      ex: "The new bridge has an elegant design.",
      forms: [F("elegance", "noun", "أناقة"), F("elegantly", "adverb", "بأناقة")] }),
    W("b16", "bridge", "جسر / كوبري", "cat_b", "noun", { forms: [F("bridges", "plural")] }),

    // ═══════════ Unit 1 — Dimensions (Adj: long · high · wide · deep ↔ Noun: length · height · width · depth) ═══════════
    W("x01", "height", "ارتفاع", "cat_x", "noun", {
      def: "how high something is.", ex: "The height of the tower is 50 m.",
      forms: [F("high", "adjective", "عالي", "The tower is 50 m high.", "البرج ارتفاعه 50 متر."),
        F("tall", "adjective", "طويل (قامة)"),
        F("heighten", "verb", "يرفع / يزيد الارتفاع")] }),
    W("x02", "width", "عرض", "cat_x", "noun", {
      def: "how wide something is.", ex: "The width of the tunnel is 12 m.",
      forms: [F("wide", "adjective", "عريض", "The tunnel is 12 m wide.", "النفق عرضه 12 متر."),
        F("widen", "verb", "يوسّع", "They will widen the road next year.", "هيوسّعوا الطريق السنة الجاية.")] }),
    W("x03", "depth", "عمق", "cat_x", "noun", {
      def: "how deep something is.", ex: "The depth of the tunnel is 20 m.",
      forms: [F("deep", "adjective", "عميق", "The pier is 30 m deep.", "الدعامة عمقها 30 متر."),
        F("deepen", "verb", "يعمّق")] }),
    // الصفات الأربعة كبطاقات مستقلة (من قايمة Adj في ورقتك). من غير أمثلة عشان ماتتحولش لأسئلة "كمّل الجملة" غامضة (high / wide / deep ممكن يركبوا على نفس الجملة)
    W("x04", "long", "طويل", "cat_x", "adjective", { def: "Adjective — the noun is length (How long is the pier?)." }),
    W("x05", "high", "عالي", "cat_x", "adjective", { def: "Adjective — the noun is height." }),
    W("x06", "wide", "عريض", "cat_x", "adjective", { def: "Adjective — the noun is width." }),
    W("x07", "deep", "عميق", "cat_x", "adjective", { def: "Adjective — the noun is depth." }),

    // ═══════════ Unit 1 — Buildings & Units ═══════════
    W("u01", "footprint", "مساحة القاعدة (بصمة المبنى)", "cat_u", "noun", { def: "the area of a building base." }),
    W("u02", "FAQs", "الأسئلة الشائعة", "cat_u", "noun", { def: "Frequently Asked Questions." }),
    W("u03", "elevator", "مصعد", "cat_u", "noun", { syn: "lift", forms: [F("elevators", "plural")] }),
    W("u04", "lift", "مصعد", "cat_u", "noun", { syn: "elevator" }),
    W("u05", "square metre", "متر مربع", "cat_u", "noun", { def: "m² — a unit for measuring area.", ex: "The footprint of the building is 400 m²." }),
    W("u06", "cubic metre", "متر مكعب", "cat_u", "noun", { def: "m³ — a unit for measuring volume.", ex: "The tank holds 50 m³ of water." }),
    W("u07", "floor", "طابق (دور)", "cat_u", "noun", { syn: "storey", forms: [F("floors", "plural")] }),
    W("u08", "storey", "طابق (دور)", "cat_u", "noun", { syn: "floor", forms: [F("storeys", "plural")] }),

    // ═══════════ Unit 1 — Maglev Train ═══════════
    W("m01", "Maglev train", "قطار الرفع المغناطيسي (ماجليف)", "cat_m", "noun", {
      def: "Maglev = magnetically levitated train.",
      ex: "What does Maglev train stand for?\nIt stands for magnetically levitated train.\nHow does Maglev train work?\nThe train runs on magnetic track.\nWhat are the parts of Maglev train?\nThey are power supply, emergency track, magnetic shaft, main tunnel, cables, magnetic track and magnetically levitated train." }),
    V("m02", "levitate", "يرتفع ويطفو في الهواء", "cat_m", "levitated", "levitated", "levitating", {
      def: "to rise and float in the air without any physical support.",
      sPast: "The train levitated above the track.", sPastTr: "القطار ارتفع فوق المسار.",
      more: [F("levitated", "adjective", "مرفوع (معلّق في الهواء)", "Maglev stands for magnetically levitated train.", "ماجليف معناها قطار مرفوع مغناطيسيًا."),
        F("levitation", "noun", "رفع / طفو في الهواء", "Levitation lets the train float above the track.", "الرفع بيخلي القطار يطفو فوق المسار.")] }),
    W("m03", "magnetic", "مغناطيسي", "cat_m", "adjective", {
      ex: "The train runs on a magnetic track.",
      forms: [F("magnet", "noun", "مغناطيس", "A magnet attracts iron.", "المغناطيس بيجذب الحديد."),
        F("magnetically", "adverb", "مغناطيسيًا"),
        F("magnetize", "verb", "يمغنط", "You can magnetize a piece of iron.", "تقدر تمغنط قطعة حديد.")] }),
    W("m04", "power supply", "مصدر الطاقة (وحدة التغذية)", "cat_m", "noun", {}),
    W("m05", "emergency track", "مسار الطوارئ", "cat_m", "noun", {}),
    W("m06", "magnetic shaft", "عمود مغناطيسي", "cat_m", "noun", {}),
    W("m07", "main tunnel", "النفق الرئيسي", "cat_m", "noun", {}),
    W("m08", "magnetic track", "المسار المغناطيسي", "cat_m", "noun", {}),

    // ═══════════ Unit 1 — Grammar Notes ═══════════
    W("n01", "screw", "مسمار قلاووظ (برغي)", "cat_n", "noun", { def: "Countable noun — بنعدّه (1, 2, 3 ...) وليه جمع.", forms: [F("screws", "plural")] }),
    W("n02", "nail", "مسمار", "cat_n", "noun", { def: "Countable noun — بنعدّه وليه جمع.", forms: [F("nails", "plural")] }),
    W("n03", "bottle", "زجاجة", "cat_n", "noun", { def: "Countable noun — بنعدّه وليه جمع.", forms: [F("bottles", "plural")] }),
    W("n04", "water", "ماء", "cat_n", "noun", { def: "Uncountable noun — مبنعدّوش وملوش جمع." }),
    W("n05", "oil", "زيت", "cat_n", "noun", { def: "Uncountable noun — مبنعدّوش وملوش جمع." }),
    W("n06", "sugar", "سكر", "cat_n", "noun", { def: "Uncountable noun — مبنعدّوش وملوش جمع." }),
    W("n07", "sand", "رمل", "cat_n", "noun", { def: "Uncountable noun — مبنعدّوش وملوش جمع." }),
    W("n10", "How many", "كام (للمعدود)", "cat_n", "phrase", {
      def: "How many + Countable nouns", ex: "How many screws do you need?" }),
    W("n11", "How much", "كام / بكام (لغير المعدود)", "cat_n", "phrase", {
      def: "How much + Uncountable nouns", ex: "How much sugar do you need?" }),
    W("n12", "some", "شوية / بعض", "cat_n", "phrase", {
      def: "Some: بنستخدمها في الجملة المثبتة، وفي السؤال لما يكون عرض (Offer) أو طلب (Request).",
      ex: "We have some nails. (Positive)\nWould you like some water? (Offer)" }),
    W("n13", "any", "أي / ولا", "cat_n", "phrase", {
      def: "Any: بنستخدمها في السؤال وفي الجملة المنفية.",
      ex: "Do you have any water? (Request)\nWe don't have any nails. (Negative)" }),
    W("n14", "there is / there are", "فيه (وصف التلف أو الحاجات الناقصة)", "cat_n", "phrase", {
      def: "Describing damage or missing items:\nthere is a ...\nthere are some ...\nthere is no ...\nthere are no ...",
      ex: "There is a scratch on the screen.\nThere are some scratches on the screen.\nThere is no manual in the box.\nThere are no batteries in the box." }),
    W("n15", "Action vs Result", "التركيز على الحدث ↔ التركيز على النتيجة", "cat_n", "phrase", {
      def: "Focus on action (past participle): I have dented the radio. / He has broken the speakers.\nFocus on result (adjective): The radio is dented. / The speakers are broken.",
      ex: "I have dented the radio.\nHe has broken the speakers.\nThe radio is dented.\nThe speakers are broken." }),
    W("n16", "Future Simple", "المستقبل البسيط", "cat_n", "phrase", {
      def: "Form: Subject + will/won't + V(inf) ...\nQuestion: Will + Subject + V(inf) ...?\nWh ... will + Subject + V(inf) ...?",
      ex: "The engineers will/won't staff the tube in 2030.\nWill the engineers staff the tube in 2030?\nWhen will the engineers staff the tube?" }),
    W("n17", "Present Perfect", "المضارع التام", "cat_n", "phrase", {
      def: "Form: He / She / It + has + p.p.\nI / We / They (You) + have + p.p.\nQuestion: Has + he / she / it + p.p. ?\nHave + I / you / we / they + p.p. ?" }),
    W("n18", "Past Simple", "الماضي البسيط", "cat_n", "phrase", {
      def: "Form: Subject + V(inf) + ed/d ...\nQuestion: Did + Subject + (V) simple form ...?\nWh + did + Subject + (V) simple form?" }),
    W("n19", "How + Adj", "كام + صفة (السؤال عن الأبعاد)", "cat_n", "phrase", {
      def: "Adj: long, high, wide, deep  ↔  Noun: length, height, width, depth\nHow + Adj + is/are ...?\nWhat + is/are + the + Noun + of ...?",
      ex: "How long is the pier?\nWhat is the height of the pier?" }),

    // ═══════════ Unit 2 — Tools & Equipment ═══════════
    W("t01", "sledgehammer", "مطرقة ثقيلة (شاكوش كبير)", "cat_t", "noun", { def: "a large heavy hammer with a long handle." }),
    W("t02", "bucket", "جردل / كوب الحفّار", "cat_t", "noun", { def: "a part attached to the front of a digger, used for transferring materials." }),
    W("t03", "beam", "كمرة / عارضة", "cat_t", "noun", { def: "a long thick piece of wood or metal or concrete used to support the weight of a building.", forms: [F("beams", "plural")] }),
    W("t04", "scaffolding", "سقالات", "cat_t", "noun", { def: "structure of metal poles and wooden boards." }),
    W("t05", "crane", "ونش / رافعة", "cat_t", "noun", { def: "a tall metal structure used for lifting heavy objects.", forms: [F("cranes", "plural")] }),
    W("t06", "builder", "بنّاء", "cat_t", "noun", {
      def: "a person whose job is to make buildings.",
      forms: [F("build", "verb", "يبني", "Workers build the deck first.", "العمال بيبنوا سطح الجسر الأول."),
        F("building", "noun", "مبنى / عمارة", "The building has ten floors.", "المبنى فيه عشرة أدوار."),
        F("builders", "plural")] }),
    W("t07", "drum", "برميل / أسطوانة", "cat_t", "noun", { def: "a large tube-like container.", forms: [F("drums", "plural")] }),
    W("t08", "digger", "حفّارة", "cat_t", "noun", {
      def: "a machine used for digging.",
      forms: [F("dig", "verb", "يحفر", "Machines dig the tunnel.", "الماكينات بتحفر النفق."), F("diggers", "plural")] }),

    // ═══════════ Unit 2 — Incidents & Cars ═══════════
    V("i01", "scratch", "يخدش", "cat_i", "scratched", "scratched", "scratching", {
      def: "to make a mark by scratching.",
      sPast: "The knife scratched the table.", sPastTr: "السكينة خدشت الترابيزة.",
      sPP: "I have scratched the screen.", sPPTr: "أنا خدشت الشاشة.",
      more: [F("scratch", "noun", "خدش", "There is a scratch on the screen.", "فيه خدش على الشاشة."),
        F("scratches", "plural", "خدوش"),
        F("scratched", "adjective", "مخدوش", "The screen is scratched.", "الشاشة مخدوشة.")] }),
    W("i02", "incident", "حادثة / واقعة", "cat_i", "noun", {
      def: "an event, especially one that is unusual or unpleasant.", forms: [F("incidents", "plural")] }),
    W("i03", "recent incidents", "حوادث / أحداث حديثة", "cat_i", "noun", {}),
    W("i04", "recovery company", "شركة صيانة / سحب وإنقاذ السيارات", "cat_i", "noun", {}),
    V("i05", "skid", "ينزلق (انزلاق العجلات)", "cat_i", "skidded", "skidded", "skidding", {
      more: [F("skid", "noun", "انزلاق (الإطار)", "The car went into a skid.", "العربية دخلت في انزلاق.")] }),
    W("i06", "flat tyre", "إطار مفرّغ (بنشر)", "cat_i", "noun", { ex: "I have a flat tyre." }),
    W("i07", "flat out", "بأقصى سرعة / على آخره", "cat_i", "phrase", {}),
    W("i08", "lost key", "مفتاح ضايع", "cat_i", "noun", {}),
    V("i09", "crash", "يصطدم (تصادم)", "cat_i", "crashed", "crashed", "crashing", {
      sPast: "Two cars crashed at the junction last night.", sPastTr: "عربيتين اتصادموا عند التقاطع إمبارح بالليل.",
      more: [F("crash", "noun", "حادث تصادم", "There was a crash at the junction.", "حصل تصادم عند التقاطع."),
        F("crashes", "plural", "حوادث تصادم")] }),
    W("i10", "fuel problems", "مشاكل الوقود", "cat_i", "noun", {}),
    W("i11", "exhaust pipe", "ماسورة العادم (شكمان)", "cat_i", "noun", {}),
    W("i12", "car registration number", "رقم لوحة السيارة", "cat_i", "noun", {}),
    W("i13", "junction", "تقاطع (طرق)", "cat_i", "noun", { forms: [F("junctions", "plural")] }),
    W("i14", "bonnet", "غطاء موتور السيارة (كبوت)", "cat_i", "noun", {}),
    W("i15", "bumper", "الصدّام (إكصدام) — مقدمة العربية", "cat_i", "noun", {}),
    W("i16", "boot", "شنطة السيارة (الغطاء الخلفي)", "cat_i", "noun", {}),
    W("i17", "windscreen", "الزجاج الأمامي", "cat_i", "noun", { syn: "wind screen" }),

    // ═══════════ Unit 2 — Damage Verbs ═══════════
    V("d01", "dent", "يطعّج (يعمل طعجة خفيفة)", "cat_d", "dented", "dented", "denting", {
      sPast: "The driver dented the door yesterday.", sPastTr: "السواق طعّج الباب إمبارح.",
      sPP: "I have dented the radio.", sPPTr: "أنا طعّجت الراديو.",
      more: [F("dent", "noun", "طعجة خفيفة", "There is a dent in the door.", "فيه طعجة في الباب."),
        F("dented", "adjective", "مطعوج", "The radio is dented.", "الراديو مطعوج.")] }),
    V("d02", "burn", "يحرق", "cat_d", ["burnt", "burned"], ["burnt", "burned"], "burning", {
      sPast: "The fire burnt the wires last night.", sPastTr: "النار حرقت الأسلاك إمبارح بالليل.",
      sPP: "The fire has burnt the wires.", sPPTr: "النار حرقت الأسلاك.",
      more: [F("burnt", "adjective", "محروق", "The wires are burnt.", "الأسلاك محروقة."), F("burned", "adjective", "محروق")] }),
    V("d03", "bend", "يثني (يلوي)", "cat_d", "bent", "bent", "bending", {
      sPast: "The workers bent the steel bar.", sPastTr: "العمال ثنوا سيخ الحديد.",
      sPP: "He has bent the pipe.", sPPTr: "هو ثنى الماسورة.",
      more: [F("bend", "noun", "انحناءة / منحنى", "There is a sharp bend in the pipe.", "فيه انحناءة حادة في الماسورة."),
        F("bent", "adjective", "معوّج (مثني)", "The pipe is bent.", "الماسورة معوّجة.")] }),
    V("d04", "break", "يكسر", "cat_d", "broke", "broken", "breaking", {
      sPast: "He broke the speakers yesterday.", sPastTr: "هو كسر السماعات إمبارح.",
      sPP: "He has broken the speakers.", sPPTr: "هو كسر السماعات.",
      more: [F("broken", "adjective", "مكسور", "The speakers are broken.", "السماعات مكسورة.")] }),
    V("d05", "crack", "يتصدّع (يشرخ)", "cat_d", "cracked", "cracked", "cracking", {
      sPast: "The heavy load cracked the beam.", sPastTr: "الحمل التقيل شرخ الكمرة.",
      sPP: "The heat has cracked the pipe.", sPPTr: "الحرارة شرخت الماسورة.",
      more: [F("crack", "noun", "شرخ / تصدّع", "There is a crack in the wall.", "فيه شرخ في الحيطة."),
        F("cracked", "adjective", "مشروخ (متصدّع)", "The screen is cracked.", "الشاشة مشروخة.")] }),
    V("d06", "tear", "يمزّق", "cat_d", "tore", "torn", "tearing", {
      sPast: "She tore the paper yesterday.", sPastTr: "هي مزّقت الورقة إمبارح.",
      sPP: "She has torn the paper.", sPPTr: "هي مزّقت الورقة.",
      more: [F("torn", "adjective", "ممزّق", "The paper is torn.", "الورقة ممزّقة.")] }),
    V("d07", "cut", "يقطع", "cat_d", "cut", "cut", "cutting", {
      sPast: "He cut the wire yesterday.", sPastTr: "هو قطع السلك إمبارح.",
      sPP: "The worker has cut the cable.", sPPTr: "العامل قطع الكابل." }),

    // ═══════════ Unit 2 — Action Verbs ═══════════
    V("a01", "lay", "يضع / يمدّ (كابلات ومواسير)", "cat_a", "laid", "laid", "laying", {
      sPast: "The workers laid the cables last week.", sPastTr: "العمال مدّوا الكابلات الأسبوع اللي فات.",
      sPP: "They have laid the pipes.", sPPTr: "هما مدّوا المواسير." }),
    V("a02", "build", "يبني", "cat_a", "built", "built", "building", {
      sPast: "They built the tunnel in two years.", sPastTr: "هما بنوا النفق في سنتين.",
      sPP: "The company has built a new bridge.", sPPTr: "الشركة بنت كوبري جديد.",
      more: [F("builder", "noun", "بنّاء"), F("building", "noun", "مبنى / عمارة", "The building has ten floors.", "المبنى فيه عشرة أدوار.")] }),
    V("a03", "put", "يضع", "cat_a", "put", "put", "putting", {
      sPast: "He put the tools on the table.", sPastTr: "هو حط العدة على الترابيزة.",
      sPP: "She has put the cables in the box.", sPPTr: "هي حطت الكابلات في الصندوق." }),
    V("a04", "attach", "يوصّل / يربط (يثبّت)", "cat_a", "attached", "attached", "attaching", {
      sPast: "They attached the cable to the pylon.", sPastTr: "هما ربطوا الكابل في البرج.",
      sPP: "He has attached the bucket to the digger.", sPPTr: "هو ثبّت الجردل في الحفّارة.",
      more: [F("attachment", "noun", "ملحق / تثبيت"),
        F("attached", "adjective", "مثبّت (موصّل)", "The bucket is attached to the digger.", "الجردل مثبّت في الحفّارة.")] }),
    V("a05", "make", "يصنع", "cat_a", "made", "made", "making", {
      sPast: "They made the beam from steel.", sPastTr: "هما عملوا الكمرة من الصلب.",
      sPP: "The company has made a new crane.", sPPTr: "الشركة صنعت ونش جديد.",
      more: [F("made", "adjective", "مصنوع", "The deck is made of concrete.", "سطح الجسر مصنوع من الخرسانة.")] }),
    V("a06", "fix", "يصلح", "cat_a", "fixed", "fixed", "fixing", {
      sPast: "The mechanic fixed the exhaust pipe yesterday.", sPastTr: "الميكانيكي صلّح الشكمان إمبارح.",
      sPP: "He has fixed the bonnet.", sPPTr: "هو صلّح الكبوت.",
      more: [F("fixed", "adjective", "مثبّت / متصلّح", "The beam is fixed.", "الكمرة مثبّتة.")] }),
    V("a07", "open", "يفتح", "cat_a", "opened", "opened", "opening", {
      sPast: "The driver opened the bonnet.", sPastTr: "السواق فتح الكبوت.",
      sPP: "She has opened the boot.", sPPTr: "هي فتحت شنطة العربية.",
      more: [F("opening", "noun", "فتحة / افتتاح", "The opening of the new bridge is next month.", "افتتاح الكوبري الجديد الشهر الجاي."),
        F("open", "adjective", "مفتوح", "The door is open.", "الباب مفتوح.")] }),
    V("a08", "pick up", "يلقط / يلتقط", "cat_a", "picked up", "picked up", "picking up", {
      sPast: "The crane picked up the beam.", sPastTr: "الونش رفع الكمرة." }),
    V("a09", "lower", "يخفض / ينزّل", "cat_a", "lowered", "lowered", "lowering", {
      sPast: "The crane lowered the beam slowly.", sPastTr: "الونش نزّل الكمرة بالراحة.",
      sPP: "They have lowered the deck.", sPPTr: "هما نزّلوا سطح الجسر." }),
    V("a10", "put down", "يضع جانبًا (يحط على الأرض)", "cat_a", "put down", "put down", "putting down", {}),
    V("a11", "take off", "يخلع (ينزع)", "cat_a", "took off", "taken off", "taking off", {
      sPast: "He took off his helmet.", sPastTr: "هو خلع الخوذة.",
      sPP: "He has taken off his helmet.", sPPTr: "هو خلع الخوذة." }),
    V("a12", "climb down", "يتسلق للأسفل (ينزل)", "cat_a", "climbed down", "climbed down", "climbing down", {}),
    V("a13", "fall over", "يسقط جانبًا (ينقلب)", "cat_a", "fell over", "fallen over", "falling over", {}),
    V("a14", "fall off", "يقع من / يسقط من", "cat_a", "fell off", "fallen off", "falling off", {}),

    // ═══════════ Unit 2 — Space & Astronomy ═══════════
    W("s01", "crew", "طاقم", "cat_s", "noun", { def: "people who work on a ship, plane, ..." }),
    V("s02", "launch", "يطلق (مركبة فضاء / قمر صناعي)", "cat_s", "launched", "launched", "launching", {
      def: "to send a space shuttle, satellite into space.",
      sPast: "They launched the satellite last year.", sPastTr: "هما أطلقوا القمر الصناعي السنة اللي فاتت.",
      sPP: "The agency has launched a new satellite.", sPPTr: "الوكالة أطلقت قمر صناعي جديد.",
      more: [F("launch", "noun", "إطلاق", "The launch of the satellite was successful.", "إطلاق القمر الصناعي كان ناجح.")] }),
    W("s03", "global", "عالمي (شامل)", "cat_s", "adjective", {
      def: "relating to the whole world.", ex: "Climate change is a global problem.",
      forms: [F("globe", "noun", "الكرة الأرضية"), F("globally", "adverb", "عالميًا")] }),
    W("s04", "telescope", "تلسكوب (منظار فلكي)", "cat_s", "noun", {
      def: "you look through it to make objects far away look bigger.", forms: [F("telescopes", "plural")] }),
    W("s05", "space shuttle", "مكوك فضاء", "cat_s", "noun", {
      def: "a vehicle in which people travel into space and back again." }),
    W("s06", "satellite", "قمر صناعي", "cat_s", "noun", {
      def: "a device sent up into space to travel round the earth, used for collecting information or communicating by radio.", forms: [F("satellites", "plural")] }),
    W("s07", "approximate", "تقريبي", "cat_s", "adjective", {
      ex: "This is an approximate value.",
      forms: [F("approximately", "adverb", "تقريبًا", "The tunnel is approximately 5 km long.", "النفق طوله تقريبًا 5 كيلو."),
        F("approximation", "noun", "تقدير تقريبي")] }),
    W("s08", "navigation", "ملاحة", "cat_s", "noun", {
      ex: "The ship uses satellite navigation.",
      forms: [F("navigate", "verb", "يلاحي (يوجّه المسار)", "Sailors navigate by the stars.", "البحّارة بيلاحوا بالنجوم.")] }),
    W("s09", "astronaut", "رائد فضاء", "cat_s", "noun", {
      ex: "The astronaut left the space shuttle.",
      forms: [F("astronauts", "plural", "رواد فضاء"),
        F("astronautical", "adjective", "متعلّق برواد الفضاء / الملاحة الفضائية", "He studies astronautical engineering.", "هو بيدرس هندسة الملاحة الفضائية.")] }),
    W("s10", "astronomer", "عالم فلك", "cat_s", "noun", { forms: [F("astronomers", "plural", "علماء فلك")] }),
    W("s11", "astronomy", "علم الفلك", "cat_s", "noun", {
      forms: [F("astronomical", "adjective", "فلكي (هائل)"), F("astronomer", "noun", "عالم فلك")] })
  ];
})();

// ---- Influence Book Words ----
const INFLUENCE_WORDS = [];

// ---- Ready-made exercises (tenses / word-form conversion) ----
const BUILTIN_EXERCISES = [
  // ─── Future Simple (من ورقتك: the engineers will/won't staff the tube) ───
  { id: "ex_c01", kind: "tense", tense: "future", catId: "cat_n",
    sentence: "The engineers ___ (staff) the tube next year.", answer: ["will staff", "'ll staff"],
    distractors: ["staffed", "have staffed", "has staffed"],
    tr: "المهندسين هيزودوا النفق بالعاملين السنة الجاية.", explain: "next year ← Future Simple = will + V1." },
  { id: "ex_c02", kind: "tense", tense: "future", catId: "cat_n",
    sentence: "The engineers ___ (not staff) the tube next year.", answer: ["won't staff", "will not staff"],
    distractors: ["didn't staff", "haven't staffed", "not staff"],
    tr: "المهندسين مش هيزودوا النفق بالعاملين السنة الجاية.", explain: "النفي في المستقبل = won't + V1 (will not)." },
  { id: "ex_c03", kind: "tense", tense: "future", catId: "cat_n",
    sentence: "___ the engineers staff the tube next year?", answer: "Will",
    distractors: ["Did", "Have", "Are"],
    tr: "هل المهندسين هيزودوا النفق بالعاملين السنة الجاية؟", explain: "السؤال في المستقبل = Will + Subject + V1 ...?" },
  { id: "ex_c04", kind: "tense", tense: "future", catId: "cat_n",
    sentence: "A: When ___ they finish the bridge? B: Next year.", answer: "will",
    distractors: ["did", "have", "are"],
    tr: "امتى هيخلصوا الكوبري؟ السنة الجاية.", explain: "Wh + will + Subject + V1. والإجابة Next year دليل إنه مستقبل." },

  // ─── Past Simple / Present Perfect بمفردات Unit 2 ───
  { id: "ex_c10", kind: "tense", tense: "past", catId: "cat_i",
    sentence: "Two cars ___ (crash) at the junction last night.", answer: "crashed",
    distractors: ["crash", "have crashed", "will crash"],
    tr: "عربيتين اتصادموا عند التقاطع إمبارح بالليل.", explain: "last night ← Past Simple = V2 (crash + ed)." },
  { id: "ex_c11", kind: "tense", tense: "past", catId: "cat_a",
    sentence: "We ___ (fix) the crane last month.", answer: "fixed",
    distractors: ["have fixed", "fix", "will fix"],
    tr: "إحنا صلّحنا الونش الشهر اللي فات.", explain: "last month وقت محدد خلص ← Past Simple." },
  { id: "ex_c12", kind: "tense", tense: "past", catId: "cat_a",
    sentence: "The builder ___ (put) the scaffolding up yesterday.", answer: "put",
    distractors: ["putted", "has put", "will put"],
    tr: "البنّاء ركّب السقالات إمبارح.", explain: "yesterday ← Past Simple. put فعل شاذ: put - put - put (V2 زي V1)." },
  { id: "ex_c13", kind: "tense", tense: "past", catId: "cat_d",
    sentence: "The fire ___ (burn) the wires last night.", answer: ["burnt", "burned"],
    distractors: ["burn", "has burnt", "will burn"],
    tr: "النار حرقت الأسلاك إمبارح بالليل.", explain: "last night ← Past Simple. burn له شكلين صح: burnt / burned." },
  { id: "ex_c14", kind: "tense", tense: "past", catId: "cat_a",
    sentence: "The crane ___ (lower) the beam two minutes ago.", answer: "lowered",
    distractors: ["lower", "has lowered", "will lower"],
    tr: "الونش نزّل الكمرة من دقيقتين.", explain: "ago ← Past Simple (V2 = lower + ed)." },
  { id: "ex_c15", kind: "tense", tense: "past", catId: "cat_d",
    sentence: "Yesterday, the wind ___ (bend) the pole.", answer: "bent",
    distractors: ["bended", "has bent", "bend"],
    tr: "إمبارح الهوا ثنى العمود.", explain: "yesterday ← Past Simple. bend - bent - bent." },
  { id: "ex_c20", kind: "tense", tense: "perfect", catId: "cat_a",
    sentence: "The mechanic ___ (fix) three cars so far this week.", answer: ["has fixed", "'s fixed"],
    distractors: ["fixed", "have fixed", "will fix"],
    tr: "الميكانيكي صلّح تلات عربيات لحد دلوقتي الأسبوع ده.", explain: "so far this week (الأسبوع لسه مستمر) ← Present Perfect = has + V3." },
  { id: "ex_c21", kind: "tense", tense: "perfect", catId: "cat_i",
    sentence: "The tunnel is still closed. It ___ (be) closed for two weeks.", answer: ["has been", "'s been"],
    distractors: ["was", "have been", "will be"],
    tr: "النفق لسه مقفول. هو مقفول بقاله أسبوعين.", explain: "for two weeks + لسه مستمر ← Present Perfect = has + V3 (been)." },
  { id: "ex_c22", kind: "tense", tense: "perfect", catId: "cat_d",
    sentence: "Oh no! Someone ___ (break) the speakers. They don't work now.", answer: ["has broken", "'s broken"],
    distractors: ["broke", "has broke", "will break"],
    tr: "يا نهار! حد كسر السماعات. مش شغالين دلوقتي.", explain: "نتيجة ظاهرة دلوقتي (مش شغالين) ← Present Perfect. break - broke - broken." },
  { id: "ex_c23", kind: "tense", tense: "forms", catId: "cat_d",
    sentence: "I have ___ (dent) the radio.", answer: "dented",
    distractors: ["dent", "denting", "dents"],
    tr: "أنا طعّجت الراديو.", explain: "have + V3. dent منتظم: V3 = dented." },
  { id: "ex_c24", kind: "tense", tense: "forms", catId: "cat_d",
    sentence: "She has ___ (tear) the paper.", answer: "torn",
    distractors: ["tore", "teared", "tearing"],
    tr: "هي مزّقت الورقة.", explain: "has + V3. tear - tore - torn." },
  { id: "ex_c25", kind: "tense", tense: "forms", catId: "cat_a",
    sentence: "The workers have ___ (lay) the cables.", answer: "laid",
    distractors: ["lay", "lain", "laying"],
    tr: "العمال مدّوا الكابلات.", explain: "have + V3. lay - laid - laid (lain هي V3 بتاعة lie مش lay)." },
  { id: "ex_c26", kind: "tense", tense: "forms", catId: "cat_a",
    sentence: "He has ___ (take off) his helmet.", answer: "taken off",
    distractors: ["took off", "taked off", "taking off"],
    tr: "هو خلع الخوذة.", explain: "has + V3. take - took - taken (+ off)." },

  // ─── تحويل الكلمات (long ⇄ length من ورقتك + عائلات المنهج) ───
  { id: "ex_v01", kind: "convert", pos: "adj", catId: "cat_b",
    sentence: "The bridge is 2 km ___. (length)", answer: "long",
    distractors: ["length", "lengthen", "lengthy"],
    tr: "الكوبري طوله 2 كيلو.", explain: "length (اسم) ← long (صفة): the bridge is + صفة." },
  { id: "ex_v02", kind: "convert", pos: "noun", catId: "cat_b",
    sentence: "The ___ of the bridge is 2 km. (long)", answer: "length",
    distractors: ["long", "lengthen", "longer"],
    tr: "طول الكوبري 2 كيلو.", explain: "long (صفة) ← length (اسم): the + اسم + of ... is." },
  { id: "ex_v03", kind: "convert", pos: "noun", catId: "cat_b",
    sentence: "The bridge has a ___ of 2 km. (long)", answer: "length",
    distractors: ["long", "lengthen", "longest"],
    tr: "الكوبري طوله 2 كيلو.", explain: "بعد a لازم اسم: a length of." },
  { id: "ex_v04", kind: "convert", pos: "adj", catId: "cat_x",
    sentence: "The tower is 50 m ___. (height)", answer: ["high", "tall"],
    distractors: ["height", "heighten", "highly"],
    tr: "البرج ارتفاعه 50 متر.", explain: "height (اسم) ← high / tall (صفة)." },
  { id: "ex_v05", kind: "convert", pos: "adj", catId: "cat_x",
    sentence: "The tunnel is 12 m ___. (width)", answer: "wide",
    distractors: ["width", "widen", "widely"],
    tr: "النفق عرضه 12 متر.", explain: "width (اسم) ← wide (صفة)." },
  { id: "ex_v06", kind: "convert", pos: "adj", catId: "cat_b",
    sentence: "This bridge looks very ___. (elegance)", answer: "elegant",
    distractors: ["elegance", "elegantly", "elegantness"],
    tr: "الكوبري ده شكله أنيق جدًا.", explain: "بعد looks very لازم صفة: elegant." },
  { id: "ex_v07", kind: "convert", pos: "adv", catId: "cat_b",
    sentence: "The bridge was designed ___. (elegant)", answer: "elegantly",
    distractors: ["elegant", "elegance", "elegants"],
    tr: "الكوبري اتصمم بأناقة.", explain: "بنوصف الفعل (designed) بحال: elegant + ly." },
  { id: "ex_v08", kind: "convert", pos: "noun", catId: "cat_s",
    sentence: "___ is the science of stars and planets. (astronomer)", answer: "Astronomy",
    distractors: ["Astronomer", "Astronomical", "Astronomically"],
    tr: "علم الفلك هو علم النجوم والكواكب.", explain: "العلم نفسه = astronomy، والشخص = astronomer." },
  { id: "ex_v09", kind: "convert", pos: "noun", catId: "cat_b",
    sentence: "The ___ of the concrete made the bridge stronger. (reinforce)", answer: "reinforcement",
    distractors: ["reinforced", "reinforce", "reinforcing"],
    tr: "تسليح الخرسانة خلّى الكوبري أقوى.", explain: "بعد the لازم اسم: reinforce + ment." },
  { id: "ex_v10", kind: "convert", pos: "adv", catId: "cat_m",
    sentence: "The train is ___ levitated. (magnet)", answer: "magnetically",
    distractors: ["magnetic", "magnet", "magnetize"],
    tr: "القطار مرفوع مغناطيسيًا.", explain: "magnetically levitated = مرفوع مغناطيسيًا (حال بيوصف الصفة levitated)." },
  { id: "ex_v11", kind: "convert", pos: "adj", catId: "cat_m",
    sentence: "The train runs on a ___ track. (magnet)", answer: "magnetic",
    distractors: ["magnet", "magnetically", "magnetize"],
    tr: "القطار بيمشي على مسار مغناطيسي.", explain: "قبل الاسم track لازم صفة: magnetic track." },
  { id: "ex_v12", kind: "convert", pos: "adj", catId: "cat_d",
    sentence: "Someone hit the radio with a hammer. Now the radio is ___. (dent)", answer: "dented",
    distractors: ["dent", "dents", "denting"],
    tr: "حد ضرب الراديو بشاكوش. دلوقتي الراديو مطعوج.", explain: "التركيز على النتيجة ← الصفة (Adj): the radio is dented. لو كان التركيز على الحدث كنا نقول I have dented the radio (V3 بعد have)." },
  { id: "ex_v13", kind: "convert", pos: "adj", catId: "cat_d",
    sentence: "The speakers fell off the table. Now they are ___. (break)", answer: "broken",
    distractors: ["break", "broke", "breaking"],
    tr: "السماعات وقعت من على الترابيزة. دلوقتي هي مكسورة.", explain: "التركيز على النتيجة ← صفة: broken (V3 بتتحول لصفة بعد to be). لو كان التركيز على الحدث كنا نقول He has broken the speakers." },

  // ─── الأبعاد: How + Adj / What is the + Noun (من ورقتك: How long is the pier? / What is the height of the pier?) ───
  { id: "ex_v14", kind: "convert", pos: "adj", catId: "cat_x",
    sentence: "How ___ is the pier? (height)", answer: ["high", "tall"],
    distractors: ["height", "heighten", "highly"],
    tr: "الدعامة ارتفاعها قد إيه؟", explain: "How + صفة + is/are ...؟ السؤال عن البُعد بالصفة (high / tall) مش بالاسم. والإجابة بالاسم: The height of the pier is 30 m." },
  { id: "ex_v15", kind: "convert", pos: "noun", catId: "cat_x",
    sentence: "What is the ___ of the pier? (high)", answer: "height",
    distractors: ["high", "heighten", "highly"],
    tr: "إيه ارتفاع الدعامة؟", explain: "What is the + اسم + of ...؟ بعد the لازم اسم: height." },
  { id: "ex_v16", kind: "convert", pos: "adj", catId: "cat_x",
    sentence: "How ___ is the tunnel? (width)", answer: "wide",
    distractors: ["width", "widen", "widely"],
    tr: "النفق عرضه قد إيه؟", explain: "How + صفة: How wide ...؟ (width اسم ← wide صفة)." },
  { id: "ex_v17", kind: "convert", pos: "noun", catId: "cat_x",
    sentence: "What is the ___ of the tunnel? (deep)", answer: "depth",
    distractors: ["deep", "deepen", "deeply"],
    tr: "إيه عمق النفق؟", explain: "What is the + اسم + of ...؟ deep (صفة) ← depth (اسم)." },
  { id: "ex_v18", kind: "convert", pos: "adj", catId: "cat_x",
    sentence: "How ___ is the bridge? (length)", answer: "long",
    distractors: ["length", "lengthen", "longest"],
    tr: "الكوبري طوله قد إيه؟", explain: "How + صفة: How long ...؟ (length اسم ← long صفة)." },
  { id: "ex_v19", kind: "convert", pos: "noun", catId: "cat_x",
    sentence: "What is the ___ of the bridge? (long)", answer: "length",
    distractors: ["long", "lengthen", "longer"],
    tr: "إيه طول الكوبري؟", explain: "What is the + اسم + of ...؟ long (صفة) ← length (اسم)." }
];

// ━━━ END: VOCAB DATA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
