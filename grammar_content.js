// محتوى تعليمي جاهز للأزمنة (مش مرتبط بالمنهج): بنك أسئلة + شرح كامل.
// بيتحمّل قبل index.html. لو عايز تعدّل سؤال أو تضيف: كل سؤال سطر واحد بالشكل:
//   T(id, tense, sentence, answer, distractors, tr, explain, hint)
//   tense: "past" | "perfect" | "future" | "forms"
//   answer: نص، أو مصفوفة لو فيه أكتر من إجابة صح (الأولى هي اللي بتظهر كاختيار)
//   distractors: 3 اختيارات غلط   |   tr: معنى الجملة بالعربي   |   explain: ليه الإجابة دي
// ═══════════════════════════════════════════════════════════════════════════

const GRAMMAR_PRACTICE = (() => {
  const T = (id, tense, sentence, answer, distractors, tr, explain, hint) =>
    ({ id, kind: 'tense', tense, sentence, answer, distractors, tr, explain, hint: hint || '' });
  return [

    // ───────────── 1) Past Simple — وقت محدد خلص ─────────────
    T('gp_001', 'past', 'I ___ (visit) the factory last week.', 'visited',
      ['have visited', 'visit', 'will visit'],
      'أنا زرت المصنع الأسبوع اللي فات.',
      'last week وقت محدد خلص في الماضي ← Past Simple (V2). مع الوقت المحدد المنتهي مينفعش Present Perfect.'),
    T('gp_002', 'past', 'She ___ (graduate) in 2021.', 'graduated',
      ['has graduated', 'graduates', 'will graduate'],
      'هي اتخرجت سنة 2021.',
      'in + سنة محددة في الماضي ← Past Simple. السنة المحددة بتمنع Present Perfect.'),
    T('gp_003', 'past', 'We ___ (finish) the project two days ago.', 'finished',
      ['have finished', 'finish', 'will finish'],
      'إحنا خلصنا المشروع من يومين.',
      'ago بتحدد وقت منتهي ← Past Simple دايمًا. مبنقولش have finished مع ago.'),
    T('gp_004', 'past', 'He ___ (not attend) the meeting yesterday.', ["didn't attend", 'did not attend'],
      ["hasn't attended", "doesn't attend", "won't attend"],
      'هو ما حضرش الاجتماع إمبارح.',
      'yesterday ← Past Simple. النفي = didn\'t + V1، والفعل بيرجع للأصل (attend) مش attended.'),
    T('gp_005', 'past', 'The engineers ___ (test) the new valve last month.', 'tested',
      ['have tested', 'test', 'will test'],
      'المهندسين اختبروا الصمام الجديد الشهر اللي فات.',
      'last month وقت منتهي ← Past Simple (test + ed).'),
    T('gp_006', 'past', 'When I was a child, I ___ (play) football every day.', 'played',
      ['have played', 'play', 'will play'],
      'لما كنت صغير كنت بلعب كورة كل يوم.',
      'when I was a child فترة خلصت ← Past Simple. وبيتستخدم كمان للعادات القديمة اللي وقفت.'),
    T('gp_007', 'past', 'My grandfather ___ (work) in a factory for forty years. He died in 2010.', 'worked',
      ['has worked', 'have worked', 'works'],
      'جدي اشتغل في مصنع أربعين سنة. هو توفى سنة 2010.',
      'رغم وجود for إلا إن الفترة خلصت (جدي توفى) ← Past Simple. لو الفترة لسه مستمرة نستخدم Present Perfect.'),
    T('gp_008', 'past', 'Alexander Graham Bell ___ (invent) the telephone in 1876.', 'invented',
      ['has invented', 'invents', 'will invent'],
      'بيل اخترع التليفون سنة 1876.',
      'حقيقة تاريخية في سنة محددة ← Past Simple.'),
    T('gp_009', 'past', 'I ___ (lose) my wallet yesterday, but I found it this morning.', 'lost',
      ['have lost', 'lose', 'will lose'],
      'أنا ضيّعت محفظتي إمبارح بس لقيتها الصبح.',
      'yesterday وقت محدد، والمشكلة اتحلّت ← Past Simple. lose ← lost (شاذ).'),
    T('gp_010', 'past', 'They ___ (build) this bridge in 1998.', 'built',
      ['have built', 'build', 'will build'],
      'همّ بنوا الكوبري ده سنة 1998.',
      'in 1998 ← Past Simple. build ← built (شاذ: V2 = V3).'),
    T('gp_011', 'past', 'She ___ (take) the exam last Sunday.', 'took',
      ['has taken', 'takes', 'taken'],
      'هي دخلت الامتحان يوم الحد اللي فات.',
      'last Sunday ← Past Simple. take ← took (V2)، أما taken فهي V3 ومحتاجة have/has قبلها.'),
    T('gp_012', 'past', 'I ___ (see) that film last night.', 'saw',
      ['have seen', 'see', 'will see'],
      'أنا شفت الفيلم ده إمبارح بالليل.',
      'last night وقت منتهي ← Past Simple. see ← saw. قارنها بـ "I have seen that film three times so far".'),
    T('gp_013', 'past', 'We ___ (meet) at a conference in 2018.', 'met',
      ['have met', 'meet', 'will meet'],
      'إحنا اتقابلنا في مؤتمر سنة 2018.',
      'in 2018 ← Past Simple. meet ← met.'),
    T('gp_014', 'past', 'Ali ___ (go) to Aswan last summer.', 'went',
      ['has gone', 'goes', 'has been'],
      'علي راح أسوان الصيف اللي فات.',
      'last summer ← Past Simple. go ← went (V2). gone هي V3.'),
    T('gp_015', 'past', 'The company ___ (open) a new branch in 2020.', 'opened',
      ['has opened', 'opens', 'will open'],
      'الشركة فتحت فرع جديد سنة 2020.',
      'in 2020 ← Past Simple.'),
    T('gp_016', 'past', 'Mona ___ (call) me an hour ago.', 'called',
      ['has called', 'calls', 'will call'],
      'منى كلمتني من ساعة.',
      'ago ← Past Simple.'),
    T('gp_017', 'past', 'She ___ (live) in Dubai for three years, then she moved to Cairo.', 'lived',
      ['has lived', 'lives', 'will live'],
      'هي عاشت في دبي تلات سنين وبعدين انتقلت القاهرة.',
      'الإقامة في دبي خلصت (بعدها انتقلت) ← Past Simple رغم وجود for. الفترة المنتهية = Past، المستمرة = Present Perfect.'),
    T('gp_018', 'past', 'I ___ (buy) this phone last year.', 'bought',
      ['have bought', 'buy', 'buyed'],
      'أنا اشتريت التليفون ده السنة اللي فاتت.',
      'last year ← Past Simple. buy ← bought (شاذ). مفيش حاجة اسمها buyed.'),
    T('gp_019', 'past', 'My brother ___ (teach) me how to swim when I was ten.', 'taught',
      ['teached', 'has taught', 'teaches'],
      'أخويا علّمني أعوم لما كان عندي عشر سنين.',
      'when I was ten ← Past Simple. teach ← taught (شاذ).'),
    T('gp_020', 'past', 'Yesterday I ___ (drive) to Alexandria.', 'drove',
      ['driven', 'drived', 'have driven'],
      'إمبارح سقت لحد إسكندرية.',
      'yesterday ← Past Simple. drive ← drove (V2). driven هي V3 ولازم يسبقها have/has.'),

    // ───────────── 2) Present Perfect — نتيجة / خبرة / لسه مستمر / فترة لسه ما خلصتش ─────────────
    T('gp_030', 'perfect', 'I ___ (finish) my homework already.', ['have finished', "'ve finished"],
      ['will finish', 'finish', 'am finishing'],
      'أنا خلصت الواجب خلاص.',
      'already (خلاص / بالفعل) ← Present Perfect = have/has + V3. بنخبّر إن الواجب خلص دلوقتي من غير ما نحدد إمتى.'),
    T('gp_031', 'perfect', 'She ___ (not receive) the email yet.', ["hasn't received", 'has not received'],
      ["doesn't receive", "won't receive", "hasn't receive"],
      'هي لسه ما استلمتش الإيميل.',
      'yet في النفي ← Present Perfect: hasn\'t + V3. مع she/he/it بنستخدم has مش have، وبعدها V3 (received) مش V1.'),
    T('gp_032', 'perfect', 'I ___ (live) in Cairo since 2015.', ['have lived', "'ve lived", 'have been living', "'ve been living"],
      ['lived', 'live', 'am living'],
      'أنا ساكن في القاهرة من سنة 2015.',
      'since + نقطة بداية، والحدث لسه مستمر ← Present Perfect. بالعربي بنقول "ساكن" (حاضر) لكن في الإنجليزي لازم have lived.'),
    T('gp_033', 'perfect', 'Ahmed still works here. He ___ (work) here for ten years.', ['has worked', "'s worked", 'has been working', "'s been working"],
      ['worked', 'works', 'have worked'],
      'أحمد لسه بيشتغل هنا. بقاله عشر سنين بيشتغل هنا.',
      'for + مدة والحدث لسه مستمر (still works) ← Present Perfect. لو كان سابها كنا نقول worked. ومع he بنستخدم has.'),
    T('gp_034', 'perfect', 'Sorry, you are late. The train ___ (just / leave).', ['has just left', "'s just left"],
      ['will just leave', 'has just leave', 'just leaving'],
      'آسف، إنت اتأخرت. القطر لسه ماشي دلوقتي.',
      'just ← Present Perfect (حدث حصل من لحظات ونتيجته قدامنا). الترتيب: has + just + V3. لاحظ الفرق: just now ← Past Simple.'),
    T('gp_035', 'perfect', 'This is the first time I ___ (drive) a truck.', ['have driven', "'ve driven"],
      ['drove', 'drive', 'will drive'],
      'دي أول مرة أسوق فيها لوري.',
      '"This is the first time ..." ← Present Perfect دايمًا (تجربة جديدة لحد دلوقتي). نفس القاعدة مع the second time / the best ... I\'ve ever.'),
    T('gp_036', 'perfect', 'Wow! I ___ (never / see) such a big turbine before.', ['have never seen', "'ve never seen"],
      ['will never see', 'have never saw', 'never seeing'],
      'واو! عمري ما شفت توربين كبير كده قبل كده.',
      'never + before ← Present Perfect (خبرة لحد دلوقتي). V3 بتاعة see هي seen مش saw.'),
    T('gp_037', 'perfect', 'We ___ (not finish) the report so far.', ["haven't finished", 'have not finished'],
      ["didn't finish", "don't finish", "haven't finish"],
      'إحنا لسه ما خلصناش التقرير لحد دلوقتي.',
      'so far (لحد دلوقتي) ← Present Perfect. الفترة لسه مفتوحة، فمنستخدمش Past Simple.'),
    T('gp_038', 'perfect', 'Oh no! She ___ (lose) her phone, so she can\'t call you now.', ['has lost', "'s lost"],
      ['lost', 'loses', 'will lose'],
      'يا نهار! هي ضيّعت تليفونها فمش هتعرف تكلمك دلوقتي.',
      'النتيجة ظاهرة دلوقتي (can\'t call you now) ← Present Perfect. التركيز على الوضع الحالي مش على إمتى ضاع.'),
    T('gp_039', 'perfect', 'Look! The engine ___ (stop).', ['has stopped', "'s stopped"],
      ['stopped', 'stops', 'will stop'],
      'بص! المحرك وقف.',
      '"Look!" يعني الحاجة قدامك دلوقتي ← Present Perfect (نتيجة حالية).'),
    T('gp_040', 'perfect', 'It\'s 10 a.m. now. I ___ (write) five emails this morning.', ['have written', "'ve written"],
      ['wrote', 'write', 'will write'],
      'الساعة 10 الصبح دلوقتي. أنا كتبت خمس إيميلات الصبح.',
      'this morning والصبح لسه شغال (الساعة 10) ← Present Perfect. لو الصبح خلص (الساعة 3 العصر مثلًا) نقول I wrote.'),
    T('gp_041', 'perfect', 'I ___ (study) English for five years, and I\'m still learning.', ['have studied', "'ve studied", 'have been studying', "'ve been studying"],
      ['studied', 'study', 'am studying'],
      'أنا بذاكر إنجليزي بقالي خمس سنين، ولسه بتعلم.',
      'for + مدة والحدث لسه مستمر (still learning) ← Present Perfect.'),
    T('gp_042', 'perfect', 'The price of steel ___ (rise) a lot recently.', ['has risen', "'s risen"],
      ['has rose', 'has rised', 'rises'],
      'سعر الحديد زاد كتير الفترة الأخيرة.',
      'recently ← Present Perfect. V3 بتاعة rise هي risen (مش rose ولا rised).'),
    T('gp_043', 'perfect', 'We ___ (know) each other since we were students.', ['have known', "'ve known"],
      ['knew', 'know', 'are knowing'],
      'إحنا بنعرف بعض من أيام الدراسة.',
      'since + بداية في الماضي والعلاقة لسه موجودة ← Present Perfect. know من الأفعال اللي مبتتحطش في -ing.'),
    T('gp_044', 'perfect', 'I ___ (read) three chapters this week, and I\'m going to finish the book on Friday.', ['have read', "'ve read"],
      ['read', 'will read', 'am reading'],
      'أنا قريت تلات فصول الأسبوع ده، وهخلّص الكتاب يوم الجمعة.',
      'this week والأسبوع لسه ما خلصش ← Present Perfect. (read بالـ have بتنطق red لكن بتتكتب read).'),
    T('gp_045', 'perfect', 'The printer isn\'t working. Someone ___ (break) it.', ['has broken', "'s broken"],
      ['broke', 'breaks', 'will break'],
      'الطابعة مش شغالة. حد كسرها.',
      'نتيجة حالية (الطابعة مش شغالة) ← Present Perfect. V3 بتاعة break هي broken.'),
    T('gp_046', 'perfect', 'I ___ (see) that film three times so far.', ['have seen', "'ve seen"],
      ['saw', 'see', 'will see'],
      'أنا شفت الفيلم ده تلات مرات لحد دلوقتي.',
      'so far ← Present Perfect. قارنها بـ "I saw that film last night" (وقت محدد ← Past Simple).'),
    T('gp_047', 'perfect', 'She still lives in Cairo. She ___ (live) there for three years.', ['has lived', "'s lived", 'has been living', "'s been living"],
      ['lived', 'lives', 'is living'],
      'هي لسه ساكنة في القاهرة. بقالها تلات سنين ساكنة هناك.',
      'نفس for + three years لكن الإقامة مستمرة ← Present Perfect. قارنها بـ gp_017 (دبي) حيث الفترة خلصت.'),
    T('gp_048', 'perfect', 'Ali isn\'t here. He ___ (go) to Aswan.', ['has gone', "'s gone"],
      ['went', 'has been', 'goes'],
      'علي مش هنا. هو راح أسوان (ولسه هناك).',
      'has gone to = راح وما رجعش لسه. أما has been to = راح ورجع.'),
    T('gp_049', 'perfect', 'Ali ___ (be) to Aswan twice.', ['has been', "'s been"],
      ['was', 'has gone', 'is'],
      'علي زار أسوان مرتين.',
      'has been to = زار المكان ورجع (خبرة). أما has gone to = راح ولسه هناك.'),
    T('gp_050', 'perfect', 'It\'s 9 a.m. and I\'m starving. I ___ (not eat) anything today.', ["haven't eaten", 'have not eaten'],
      ["don't eat", "won't eat", "haven't ate"],
      'الساعة 9 الصبح وأنا جعان. ما أكلتش أي حاجة النهاردة.',
      'today واليوم لسه شغال ← Present Perfect. V3 بتاعة eat هي eaten.'),
    T('gp_051', 'perfect', 'The company ___ (open) three new branches so far this year.', ['has opened', "'s opened"],
      ['opens', 'will open', 'opened'],
      'الشركة فتحت تلات فروع جديدة لحد دلوقتي السنة دي.',
      'so far this year (السنة لسه مستمرة) ← Present Perfect. ومع company (مفرد) بنستخدم has.'),
    T('gp_052', 'perfect', 'Mona ___ (call) me three times already today.', ['has called', "'s called"],
      ['calls', 'will call', 'have called'],
      'منى كلمتني تلات مرات النهاردة.',
      'already + today ← Present Perfect. مع Mona بنستخدم has.'),

    // ───────────── 3) Future — حاجة لسه هتحصل ─────────────
    T('gp_060', 'future', 'I think it ___ (rain) tomorrow.', ['will rain', "'ll rain", 'is going to rain'],
      ['rained', 'has rained', 'rains'],
      'أنا شايف إنها هتمطر بكره.',
      'tomorrow + I think (توقع شخصي) ← will + V1. الفعل بعد will بيفضل V1 من غير s أو ed.'),
    T('gp_061', 'future', 'A: The phone is ringing.   B: I ___ (answer) it.', ['will answer', "'ll answer"],
      ['answered', 'have answered', 'answer'],
      'أ: التليفون بيرن. ب: أنا هرد عليه.',
      'قرار لحظي وقت الكلام (مكنش مخطط له) ← will. لو كان مخطط من قبل كنا نستخدم be going to.'),
    T('gp_062', 'future', 'I promise I ___ (not tell) anyone your secret.', ["won't tell", 'will not tell'],
      ["didn't tell", "haven't told", "don't tell"],
      'أوعدك إني مش هقول لحد على سرك.',
      'وعد ← will / won\'t + V1.'),
    T('gp_063', 'future', 'Next year, I ___ (graduate) from the institute.', ['will graduate', "'ll graduate", 'am going to graduate'],
      ['graduated', 'have graduated', 'graduates'],
      'السنة الجاية هتخرج من المعهد.',
      'next year ← future: will + V1.'),
    T('gp_064', 'future', 'Don\'t worry. I ___ (help) you with the report.', ['will help', "'ll help"],
      ['helped', 'have helped', 'helps'],
      'متقلقش. أنا هساعدك في التقرير.',
      'عرض مساعدة لحظي ← will + V1.'),
    T('gp_065', 'future', 'We have already bought the tickets. We ___ (visit) Luxor next month.', ['are going to visit', 'are visiting', 'will visit', "'ll visit"],
      ['visited', 'have visited', 'visiting'],
      'إحنا اشترينا التذاكر خلاص. هنزور الأقصر الشهر الجاي.',
      'خطة متقررة قبل الكلام (اشترينا التذاكر) ← be going to (أو Present Continuous). will مقبولة نحويًا لكنها أضعف هنا لأنها بتدل على قرار لحظي.'),
    T('gp_066', 'future', 'Look at those black clouds! It ___ (rain).', ['is going to rain', "'s going to rain", 'will rain', "'ll rain"],
      ['rained', 'has rained', 'rains'],
      'بص على السحاب الأسود ده! هتمطر.',
      'فيه دليل واضح قدامك دلوقتي (سحاب أسود) ← الأنسب be going to. will مقبولة برضه لكنها بتدل أكتر على توقع شخصي (I think it will rain). في الامتحانات: دليل ظاهر = going to. المهم هنا إنه مستقبل: Past (rained) و Present Perfect (has rained) غلط.'),
    T('gp_067', 'future', 'If it rains tomorrow, we ___ (stay) at home.', ['will stay', "'ll stay"],
      ['stayed', 'have stayed', 'would stay'],
      'لو مطرت بكره هنقعد في البيت.',
      'جملة If ← if + present simple (rains) , will + V1. بعد if مبنحطش will أبدًا.'),
    T('gp_068', 'future', 'I ___ (call) you as soon as I arrive.', ['will call', "'ll call"],
      ['called', 'have called', 'calling'],
      'هكلمك أول ما أوصل.',
      'لاحظ: بعد as soon as بنقول arrive (حاضر) مش will arrive. وفي الجملة الأساسية بنستخدم will + V1.'),
    T('gp_069', 'future', 'The new factory ___ (open) next year.', ['will open', "'ll open", 'is going to open'],
      ['opened', 'has opened', 'opening'],
      'المصنع الجديد هيفتح السنة الجاية.',
      'next year ← future.'),
    T('gp_070', 'future', 'In 2030, robots ___ (do) most boring jobs.', ['will do', "'ll do", 'are going to do'],
      ['did', 'have done', 'does'],
      'في 2030 الروبوتات هتعمل أغلب الشغل الممل.',
      'توقع عن المستقبل البعيد ← will + V1.'),
    T('gp_071', 'future', 'Perhaps they ___ (come) to the party tonight.', ['will come', "'ll come"],
      ['came', 'have come', 'comes'],
      'يمكن يجوا الحفلة الليلة.',
      'perhaps / probably / maybe ← توقع ← will + V1.'),
    T('gp_072', 'future', 'I\'m too tired to cook. I think I ___ (order) a pizza.', ['will order', "'ll order"],
      ['ordered', 'have ordered', 'order'],
      'أنا تعبان مش قادر أطبخ. أظن هطلب بيتزا.',
      'قرار لحظي وقت الكلام ← will.'),
    T('gp_073', 'future', 'It\'s very hot in here. I ___ (open) the window.', ['will open', "'ll open"],
      ['opened', 'have opened', 'opening'],
      'الجو حر هنا. هفتح الشباك.',
      'قرار لحظي ← will + V1.'),
    T('gp_074', 'future', 'She ___ (be) thirty next month.', ['will be', "'ll be", 'is going to be'],
      ['was', 'has been', 'were'],
      'هي هتبقى تلاتين الشهر الجاي.',
      'next month ← future. will + be (V1 بتاعة be هي be).'),

    // ───────────── 4) نفس الجملة بثلاث كلمات دالة مختلفة ─────────────
    T('gp_080', 'past', 'Yesterday, the supervisor ___ (check) our work.', 'checked',
      ['has checked', 'checks', 'will check'],
      'إمبارح المشرف راجع شغلنا.',
      'Yesterday ← Past Simple.'),
    T('gp_081', 'perfect', 'So far, the supervisor ___ (check) three machines.', ['has checked', "'s checked"],
      ['checked', 'have checked', 'will check'],
      'لحد دلوقتي المشرف فحص تلات ماكينات.',
      'So far ← Present Perfect. (نفس الفعل، تغيّر الزمن بتغيّر الكلمة الدالة.)'),
    T('gp_082', 'future', 'Tomorrow, the supervisor ___ (check) our work.', ['will check', "'ll check", 'is going to check'],
      ['checked', 'has checked', 'checking'],
      'بكره المشرف هيراجع شغلنا.',
      'Tomorrow ← Future.'),
    T('gp_083', 'past', 'She ___ (write) the report last night.', 'wrote',
      ['has written', 'writes', 'written'],
      'هي كتبت التقرير إمبارح بالليل.',
      'last night ← Past Simple. write ← wrote.'),
    T('gp_084', 'perfect', 'She ___ (write) the report already.', ['has written', "'s written"],
      ['will write', 'writes', 'have written'],
      'هي كتبت التقرير خلاص.',
      'already ← Present Perfect. write ← written (V3).'),
    T('gp_085', 'future', 'She ___ (write) the report tomorrow.', ['will write', "'ll write", 'is going to write'],
      ['wrote', 'has written', 'written'],
      'هي هتكتب التقرير بكره.',
      'tomorrow ← will + V1 (write).'),
    T('gp_086', 'past', 'They ___ (send) the parts last Monday.', 'sent',
      ['have sent', 'send', 'will send'],
      'همّ بعتوا القطع يوم الاتنين اللي فات.',
      'last Monday ← Past Simple. send ← sent.'),
    T('gp_087', 'perfect', 'They ___ (not send) the parts yet.', ["haven't sent", 'have not sent'],
      ["don't send", "hasn't sent", "haven't send"],
      'همّ لسه ما بعتوش القطع.',
      'yet ← Present Perfect negative. مع they بنستخدم have مش has.'),
    T('gp_088', 'future', 'They ___ (send) the parts next Monday.', ['will send', "'ll send", 'are going to send'],
      ['sent', 'have sent', 'sending'],
      'همّ هيبعتوا القطع يوم الاتنين الجاي.',
      'next Monday ← Future.'),
    T('gp_089', 'past', 'I ___ (call) the customer two hours ago.', 'called',
      ['have called', 'call', 'will call'],
      'أنا كلمت العميل من ساعتين.',
      'ago ← Past Simple.'),
    T('gp_090', 'perfect', 'I ___ (call) the customer twice today, and he hasn\'t answered.', ['have called', "'ve called"],
      ['calls', 'calling', 'will call'],
      'أنا كلمت العميل مرتين النهاردة وما ردش.',
      'اليوم لسه شغال + النتيجة لحد دلوقتي (hasn\'t answered) ← Present Perfect.'),
    T('gp_091', 'future', 'I ___ (call) the customer tomorrow morning.', ['will call', "'ll call", 'am going to call'],
      ['called', 'have called', 'calling'],
      'أنا هكلم العميل بكره الصبح.',
      'tomorrow morning ← Future.'),

    // ───────────── 5) صيغ الأفعال: V1 / V2 / V3 (forms) ─────────────
    T('gp_100', 'forms', 'Did you ___ (go) to the lab yesterday?', 'go',
      ['went', 'gone', 'going'],
      'رحت المعمل إمبارح؟',
      'بعد did الفعل بيرجع V1 دايمًا: Did you go ✓ — Did you went ✗.', 'بعد did / didn\'t / will بنستخدم V1'),
    T('gp_101', 'forms', 'She didn\'t ___ (come) to work yesterday.', 'come',
      ['came', 'comes', 'coming'],
      'هي ما جاتش الشغل إمبارح.',
      'didn\'t + V1 (come). الدلالة على الماضي اتحمّلت على didn\'t بس.', 'بعد did / didn\'t / will بنستخدم V1'),
    T('gp_102', 'forms', 'Did they ___ (finish) the test?', 'finish',
      ['finished', 'finishes', 'finishing'],
      'هل خلصوا الاختبار؟',
      'في السؤال Did + subject + V1 (finish).', 'بعد did / didn\'t / will بنستخدم V1'),
    T('gp_103', 'forms', 'Will you ___ (help) me with this box?', 'help',
      ['helped', 'helps', 'helping'],
      'ممكن تساعدني في الكرتونة دي؟',
      'بعد will فعل V1 دايمًا.', 'بعد did / didn\'t / will بنستخدم V1'),
    T('gp_104', 'forms', 'He won\'t ___ (forget) your birthday.', 'forget',
      ['forgot', 'forgotten', 'forgets'],
      'هو مش هينسى عيد ميلادك.',
      'won\'t + V1 (forget).', 'بعد did / didn\'t / will بنستخدم V1'),
    T('gp_105', 'forms', 'She has ___ (write) three letters this week.', 'written',
      ['wrote', 'writed', 'writing'],
      'هي كتبت تلات جوابات الأسبوع ده.',
      'has + V3. write ← wrote ← written.', 'بعد have / has بنستخدم V3'),
    T('gp_106', 'forms', 'The sun has ___ (rise).', 'risen',
      ['rose', 'rised', 'rising'],
      'الشمس طلعت.',
      'has + V3. rise ← rose ← risen.', 'بعد have / has بنستخدم V3'),
    T('gp_107', 'forms', 'He has ___ (take) my pen.', 'taken',
      ['took', 'taked', 'taking'],
      'هو أخد القلم بتاعي.',
      'has + V3. take ← took ← taken.', 'بعد have / has بنستخدم V3'),
    T('gp_108', 'forms', 'We have ___ (begin) the test.', 'begun',
      ['began', 'beginned', 'beginning'],
      'إحنا بدأنا الاختبار.',
      'have + V3. begin ← began ← begun.', 'بعد have / has بنستخدم V3'),
    T('gp_109', 'forms', 'They have ___ (choose) a new supplier.', 'chosen',
      ['chose', 'choosed', 'choosing'],
      'همّ اختاروا مورّد جديد.',
      'have + V3. choose ← chose ← chosen.', 'بعد have / has بنستخدم V3'),
    T('gp_110', 'forms', 'I have ___ (forget) his name.', 'forgotten',
      ['forgot', 'forgetted', 'forgetting'],
      'أنا نسيت اسمه.',
      'have + V3. forget ← forgot ← forgotten.', 'بعد have / has بنستخدم V3'),
    T('gp_111', 'forms', 'The glass has ___ (break).', 'broken',
      ['broke', 'breaked', 'breaking'],
      'الكوباية اتكسرت.',
      'has + V3. break ← broke ← broken.', 'بعد have / has بنستخدم V3'),
    T('gp_112', 'forms', 'She has ___ (speak) to the manager.', 'spoken',
      ['spoke', 'speaked', 'speaking'],
      'هي اتكلمت مع المدير.',
      'has + V3. speak ← spoke ← spoken.', 'بعد have / has بنستخدم V3'),
    T('gp_113', 'forms', 'Have you ___ (see) my keys?', 'seen',
      ['saw', 'seed', 'seeing'],
      'شفت مفاتيحي؟',
      'Have you + V3. see ← saw ← seen.', 'بعد have / has بنستخدم V3'),
    T('gp_114', 'forms', 'He has ___ (drive) this truck for ten years.', 'driven',
      ['drove', 'drived', 'driving'],
      'هو بيسوق اللوري ده بقاله عشر سنين.',
      'has + V3. drive ← drove ← driven.', 'بعد have / has بنستخدم V3'),
    T('gp_115', 'forms', 'How long have you ___ (have) this laptop?', 'had',
      ['has', 'having', 'haved'],
      'بقالك قد إيه معاك اللاب توب ده؟',
      '"How long have you ...؟" ← Present Perfect فنحتاج V3. have ← had ← had (V2 = V3). قارنها بـ "When did you buy it؟" (Past Simple).', 'بعد have / has بنستخدم V3'),
    T('gp_116', 'forms', 'Have you ever ___ (eat) fish tacos?', 'eaten',
      ['ate', 'eat', 'eating'],
      'هل جربت تاكو سمك قبل كده؟',
      'Have you ever + V3. eat ← ate ← eaten.', 'بعد have / has بنستخدم V3'),
    T('gp_117', 'forms', 'Have you ever ___ (be) to Alexandria?', 'been',
      ['was', 'were', 'being'],
      'هل رحت إسكندرية قبل كده؟',
      'Have you ever been to ... ؟ — V3 بتاعة be هي been.', 'بعد have / has بنستخدم V3'),
    T('gp_118', 'forms', 'How many cups of coffee have you ___ (drink) today?', 'drunk',
      ['drank', 'drinked', 'drinking'],
      'شربت كام فنجان قهوة النهاردة؟',
      'have you + V3. drink ← drank ← drunk. (today لسه شغال ← Present Perfect).', 'بعد have / has بنستخدم V3')
  ];
})();

// ═══════════════════════════════════════════════════════════════════════════
// الدرس: كل عنصر = قسم قابل للفتح في شاشة "📘 شرح الأزمنة"
// ═══════════════════════════════════════════════════════════════════════════
const TENSE_LESSON = (() => {
  const ex = (en, ar) => `<div class="ls-ex">${en}${ar ? `<small>${ar}</small>` : ''}</div>`;
  const fx = (bad, good, why) => `<div class="ls-fix"><div class="ls-bad">✗ <span class="en">${bad}</span></div><div class="ls-good">✓ <span class="en">${good}</span></div>${why ? `<div class="ls-why">${why}</div>` : ''}</div>`;
  const fm = (txt) => `<div class="ls-formula">${txt}</div>`;

  const timeline = `<svg viewBox="0 0 360 142" width="100%" role="img" aria-label="Timeline: Past Simple, Present Perfect, Future" style="display:block;margin:6px auto 2px;max-width:420px;">
    <defs><marker id="lsah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#64748b"/></marker></defs>
    <line x1="8" y1="92" x2="352" y2="92" stroke="#64748b" stroke-width="3" marker-end="url(#lsah)"/>
    <circle cx="52" cy="92" r="7" fill="#ef4444"/>
    <text x="52" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">Past Simple</text>
    <text x="52" y="113" text-anchor="middle" font-size="9.5" fill="#64748b">yesterday · ago</text>
    <path d="M103 92 Q146 38 190 92" fill="none" stroke="#8b5cf6" stroke-width="3.5"/>
    <circle cx="103" cy="92" r="5" fill="#8b5cf6"/>
    <text x="146" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#7c3aed">Present Perfect</text>
    <text x="146" y="113" text-anchor="middle" font-size="9.5" fill="#64748b">since · already</text>
    <line x1="190" y1="76" x2="190" y2="108" stroke="#1e293b" stroke-width="3.5"/>
    <text x="190" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="#1e293b">NOW</text>
    <circle cx="287" cy="92" r="7" fill="#22c55e"/>
    <text x="287" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#16a34a">Future</text>
    <text x="287" y="113" text-anchor="middle" font-size="9.5" fill="#64748b">tomorrow · next</text>
  </svg>`;

  const irregular = [
    ['be', 'was / were', 'been'], ['begin', 'began', 'begun'], ['break', 'broke', 'broken'], ['bring', 'brought', 'brought'],
    ['build', 'built', 'built'], ['buy', 'bought', 'bought'], ['choose', 'chose', 'chosen'], ['come', 'came', 'come'],
    ['do', 'did', 'done'], ['drink', 'drank', 'drunk'], ['drive', 'drove', 'driven'], ['eat', 'ate', 'eaten'],
    ['fall', 'fell', 'fallen'], ['find', 'found', 'found'], ['forget', 'forgot', 'forgotten'], ['get', 'got', 'got / gotten'],
    ['give', 'gave', 'given'], ['go', 'went', 'gone'], ['grow', 'grew', 'grown'], ['have', 'had', 'had'],
    ['hear', 'heard', 'heard'], ['keep', 'kept', 'kept'], ['know', 'knew', 'known'], ['leave', 'left', 'left'],
    ['lose', 'lost', 'lost'], ['make', 'made', 'made'], ['meet', 'met', 'met'], ['pay', 'paid', 'paid'],
    ['put', 'put', 'put'], ['read', 'read (red)', 'read (red)'], ['rise', 'rose', 'risen'], ['run', 'ran', 'run'],
    ['say', 'said', 'said'], ['see', 'saw', 'seen'], ['sell', 'sold', 'sold'], ['send', 'sent', 'sent'],
    ['speak', 'spoke', 'spoken'], ['take', 'took', 'taken'], ['teach', 'taught', 'taught'], ['tell', 'told', 'told'],
    ['think', 'thought', 'thought'], ['win', 'won', 'won'], ['write', 'wrote', 'written']
  ];
  const irrTable = `<table class="ls-tbl"><tr><th>V1</th><th>V2 (Past Simple)</th><th>V3 (Perfect)</th></tr>` +
    irregular.map(r => `<tr><td class="en">${r[0]}</td><td class="en">${r[1]}</td><td class="en">${r[2]}</td></tr>`).join('') + `</table>`;

  return [
    // ──────────────────────────────────────────────
    { id: 'big', icon: '🧭', title: 'الصورة الكبيرة — إزاي تفكر', html: `
      ${timeline}
      <p>الفكرة كلها في سؤال واحد: <b>الحدث ده إمتى حصل بالنسبة لـ "دلوقتي"؟</b></p>
      <table class="ls-tbl">
        <tr><th>الزمن</th><th>الفكرة</th><th>مثال</th></tr>
        <tr><td><b class="en">Past Simple</b></td><td>حدث <b>بدأ وخلص</b> في وقت <b>معروف</b> في الماضي.</td><td class="en">I visited Cairo in 2019.</td></tr>
        <tr><td><b class="en">Present Perfect</b></td><td>حدث حصل في الماضي <b>وله علاقة بدلوقتي</b> (نتيجة / خبرة / لسه مستمر) و<b>الوقت مش مهم أو مش محدد</b>.</td><td class="en">I have visited Cairo twice.</td></tr>
        <tr><td><b class="en">Future</b></td><td>حدث <b>لسه هيحصل</b> بعد دلوقتي.</td><td class="en">I will visit Cairo next year.</td></tr>
      </table>
      <h4>الأسئلة الثلاثة اللي تختار بيها الزمن</h4>
      <ol>
        <li>الحدث <b>لسه ما حصلش</b>؟ ← <span class="en">will / be going to</span>.</li>
        <li>اتذكر <b>وقت محدد خلص</b> (<span class="en">yesterday · ago · last … · in 2019 · when I was …</span>)؟ ← <b class="en">Past Simple</b>.</li>
        <li>فيه كلمة زي (<span class="en">already · yet · just · ever · never · so far · for · since · this week · today</span>) أو <b>النتيجة باينة دلوقتي</b>؟ ← <b class="en">Present Perfect</b>.</li>
      </ol>
      <div class="ls-note">⚠️ <b>فخ للعرب:</b> العربي مفيهوش Present Perfect. بنقول "أنا ساكن هنا من 5 سنين" بالحاضر، لكن الإنجليزي لازم: ${'<span class="en">I have lived here for five years</span>'} (مش <span class="en">I live</span> ولا <span class="en">I lived</span>).</div>
    ` },

    // ──────────────────────────────────────────────
    { id: 'past', icon: '⏪', title: 'Past Simple — الماضي البسيط', html: `
      <h4>الصيغة</h4>
      ${fm('(+) Subject + V2 &nbsp;&nbsp;→ She <b>worked</b> / He <b>went</b>')}
      ${fm('(−) Subject + did not (didn\'t) + V1 &nbsp;&nbsp;→ She <b>didn\'t work</b>')}
      ${fm('(?) Did + Subject + V1 ? &nbsp;&nbsp;→ <b>Did</b> she <b>work</b>?')}
      <p>الإجابات المختصرة: <span class="en">Yes, she did. / No, she didn't.</span> — ومع <span class="en">be</span>: <span class="en">I/he/she/it was · you/we/they were</span> (النفي <span class="en">wasn't / weren't</span>، والسؤال <span class="en">Was he …? / Were you …?</span>).</p>
      <div class="ls-note">📌 <b>أهم قاعدة:</b> مع <span class="en">did / didn't</span> الفعل بيرجع <b>V1</b>، والـ V2 بتختفي (الماضي اتحمّل على did).</div>
      ${fx('Did you went there?', 'Did you go there?', '')}
      ${fx("I didn't saw him.", "I didn't see him.", '')}
      <h4>الاستخدام</h4>
      <ol>
        <li><b>حدث خلص في وقت محدد:</b>${ex('We tested the valve yesterday.', 'اختبرنا الصمام إمبارح.')}</li>
        <li><b>عادة قديمة وقفت:</b>${ex('When I was young, I played football every day.', 'لما كنت صغير كنت بلعب كورة كل يوم.')}</li>
        <li><b>أحداث متتابعة في قصة:</b>${ex('He opened the box, took the part and left.', 'فتح الصندوق وأخد القطعة ومشي.')}</li>
        <li><b>فترة خلصت حتى لو فيها for:</b>${ex('My grandfather worked here for 40 years. (He died in 2010.)', 'جدي اشتغل هنا 40 سنة. (وتوفى)')}</li>
      </ol>
      <h4>الكلمات الدالة</h4>
      <p class="en">yesterday · last night / week / month / year · … ago · in 2019 · in May · on Monday · when I was a child · then · the other day</p>
      <h4>إزاي نعمل V2 للأفعال المنتظمة (+ed)</h4>
      <table class="ls-tbl">
        <tr><th>القاعدة</th><th>مثال</th></tr>
        <tr><td>القاعدة العامة: +ed</td><td class="en">work → worked · test → tested</td></tr>
        <tr><td>ينتهي بـ e: +d بس</td><td class="en">live → lived · use → used</td></tr>
        <tr><td>حرف ساكن + y: شيل y وحط ied</td><td class="en">study → studied · carry → carried</td></tr>
        <tr><td>حرف متحرك + y: +ed عادي</td><td class="en">play → played · stay → stayed</td></tr>
        <tr><td>كلمة قصيرة (ساكن+متحرك+ساكن): ضاعف الحرف الأخير</td><td class="en">stop → stopped · plan → planned</td></tr>
      </table>
      <p>نطق ed: <span class="en">/t/</span> بعد الأصوات المهموسة (<span class="en">worked, helped</span>)، <span class="en">/d/</span> بعد المجهورة (<span class="en">played, called</span>)، <span class="en">/ɪd/</span> بعد t و d (<span class="en">wanted, needed</span>).</p>
      <p>الأفعال الشاذة (irregular) لازم تتحفظ — الجدول في آخر الدرس. أمثلة: <span class="en">go → went · see → saw · buy → bought</span>.</p>
    ` },

    // ──────────────────────────────────────────────
    { id: 'perfect', icon: '🔗', title: 'Present Perfect — المضارع التام', html: `
      <h4>الصيغة</h4>
      ${fm('(+) have / has + V3 &nbsp;&nbsp;→ I <b>have finished</b> · She <b>has finished</b>')}
      ${fm('(−) have / has + not + V3 &nbsp;&nbsp;→ I <b>haven\'t finished</b> · She <b>hasn\'t finished</b>')}
      ${fm('(?) Have / Has + Subject + V3 ? &nbsp;&nbsp;→ <b>Have</b> you <b>finished</b>?')}
      <p><span class="en">has</span> مع <span class="en">he / she / it</span> والمفرد، و<span class="en">have</span> مع <span class="en">I / you / we / they</span> والجمع. الاختصار: <span class="en">I've · you've · she's · they've</span> (لاحظ <span class="en">she's + V3 = she has</span>).</p>
      <p>V3 للأفعال المنتظمة = V2 (<span class="en">worked</span>)، أما الشاذة فلها شكل خاص (<span class="en">go → gone · write → written</span>).</p>
      <h4>الاستخدامات الخمسة</h4>
      <ol>
        <li><b>نتيجة ظاهرة دلوقتي:</b>${ex("I've lost my keys. (so I can't open the door now)", 'ضيّعت مفاتيحي. (فمش قادر أفتح دلوقتي)')}</li>
        <li><b>خبرة في الحياة</b> (ever / never / before):${ex('Have you ever been to Alexandria? — I have never seen snow.', 'رحت إسكندرية قبل كده؟ — عمري ما شفت تلج.')}</li>
        <li><b>بدأ في الماضي ولسه مستمر</b> (for / since):${ex("I've lived here for five years. / since 2020.", 'ساكن هنا بقالي 5 سنين / من 2020.')}</li>
        <li><b>حدث لسه حاصل</b> (just / already / yet / recently):${ex("She has just left. — I haven't finished yet.", 'هي لسه ماشية دلوقتي. — لسه ما خلصتش.')}</li>
        <li><b>فترة زمنية لسه ما خلصتش</b> (today / this week / this year / so far):${ex("I've written five emails this morning.", 'كتبت خمس إيميلات الصبح (والصبح لسه شغال).')}</li>
      </ol>
      <h4>قواعد الكلمات الدالة</h4>
      <table class="ls-tbl">
        <tr><th>الكلمة</th><th>المعنى / مكانها</th><th>مثال</th></tr>
        <tr><td class="en">for</td><td>+ <b>مدة</b> (3 years · two hours · a long time)</td><td class="en">for five years</td></tr>
        <tr><td class="en">since</td><td>+ <b>نقطة بداية</b> (2019 · Monday · I was a child)</td><td class="en">since 2019</td></tr>
        <tr><td class="en">just</td><td>من لحظات — بين have و V3</td><td class="en">has just left</td></tr>
        <tr><td class="en">already</td><td>خلاص — في الإيجاب، بين have و V3 أو في الآخر</td><td class="en">has already left</td></tr>
        <tr><td class="en">yet</td><td>لسه / بعد — في <b>النفي والسؤال</b> وفي آخر الجملة</td><td class="en">hasn't left yet · Has she left yet?</td></tr>
        <tr><td class="en">ever</td><td>في الأسئلة: "في أي وقت في حياتك"</td><td class="en">Have you ever …?</td></tr>
        <tr><td class="en">never</td><td>نفي بمعنى "أبدًا" — مبنقولش haven't never</td><td class="en">I have never …</td></tr>
        <tr><td class="en">so far / up to now</td><td>لحد دلوقتي</td><td class="en">so far this week</td></tr>
      </table>
      <h4>been و gone</h4>
      ${ex('He has been to Aswan.', 'راح أسوان ورجع (زارها قبل كده).')}
      ${ex('He has gone to Aswan.', 'راح أسوان ولسه هناك (مش موجود هنا).')}
      <h4>ممنوعات</h4>
      ${fx('I have seen him yesterday.', 'I saw him yesterday.', 'yesterday وقت محدد منتهي ← Past Simple.')}
      ${fx('When have you arrived?', 'When did you arrive?', 'when بتسأل عن وقت محدد ← Past Simple.')}
      <p class="ls-note">📌 "This is the first time …" و "the best … I've ever …" ← Present Perfect دايمًا: <span class="en">This is the first time I have driven a truck.</span></p>
      <p><span class="en">just now</span> = من لحظة ← <b>Past Simple</b> (<span class="en">I saw him just now</span>)، أما <span class="en">just</span> لوحدها ← Present Perfect (<span class="en">I have just seen him</span>).</p>
    ` },

    // ──────────────────────────────────────────────
    { id: 'compare', icon: '⚖️', title: 'المقارنة: Past Simple ⇄ Present Perfect', html: `
      <table class="ls-tbl">
        <tr><th></th><th class="en">Past Simple</th><th class="en">Present Perfect</th></tr>
        <tr><td><b>الوقت</b></td><td>محدد ومنتهي</td><td>مش محدد / لسه مستمر / له علاقة بدلوقتي</td></tr>
        <tr><td><b>الصيغة</b></td><td class="en">V2</td><td class="en">have / has + V3</td></tr>
        <tr><td><b>كلمات دالة</b></td><td class="en">yesterday · ago · last … · in 2019 · when</td><td class="en">already · yet · just · ever · never · so far · for · since · this week · today</td></tr>
        <tr><td><b>التركيز</b></td><td>على الحدث وإمتى حصل</td><td>على النتيجة / الخبرة / المدة</td></tr>
      </table>
      <h4>نفس الفعل، معنى مختلف</h4>
      ${ex('I lived in Cairo for five years.', 'عشت في القاهرة خمس سنين. (خلصت — دلوقتي مش ساكن هناك)')}
      ${ex("I've lived in Cairo for five years.", 'ساكن في القاهرة بقالي خمس سنين. (لسه ساكن)')}
      ${ex('She worked here in 2015.', 'اشتغلت هنا سنة 2015. (وقت محدد)')}
      ${ex('She has worked here since 2015.', 'بتشتغل هنا من 2015. (ولسه)')}
      ${ex('I lost my wallet yesterday. (I found it later.)', 'ضيّعت محفظتي إمبارح (ولقيتها بعدين).')}
      ${ex("I've lost my wallet! (I still can't find it.)", 'ضيّعت محفظتي! (ولسه مش لاقيها).')}
      ${ex("I didn't finish the report yesterday.", 'ما خلصتش التقرير إمبارح.')}
      ${ex("I haven't finished the report yet.", 'لسه ما خلصتش التقرير.')}
      <div class="ls-note">💡 <b>قاعدة ذهبية:</b> الفترة اللي <b>خلصت</b> (yesterday · last week) ← Past Simple. الفترة اللي <b>لسه شغالة</b> (today · this week · so far) ← Present Perfect.</div>
      <p>سؤال عن <b>وقت محدد</b> ← Past Simple (<span class="en">When did you buy it?</span>). سؤال عن <b>مدة</b> ← Present Perfect (<span class="en">How long have you had it?</span>).</p>
    ` },

    // ──────────────────────────────────────────────
    { id: 'future', icon: '⏩', title: 'Future — المستقبل (will و going to)', html: `
      <p>الإنجليزي مفيهوش صيغة مستقبل بفعل واحد زي العربي (سـ…/ هـ…)، فبنستخدم <span class="en">will</span> أو <span class="en">be going to</span>.</p>
      <h4>will + V1</h4>
      ${fm('(+) will + V1 &nbsp;&nbsp;→ I <b>will go</b> · I\'ll go')}
      ${fm('(−) will not (won\'t) + V1 &nbsp;&nbsp;→ I <b>won\'t go</b>')}
      ${fm('(?) Will + Subject + V1 ? &nbsp;&nbsp;→ <b>Will</b> you <b>go</b>?')}
      <p><span class="en">will</span> مع كل الضمائر بنفس الشكل، وبعدها <b>V1 من غير s ولا ed</b>.</p>
      <ol>
        <li><b>قرار لحظي وقت الكلام:</b>${ex("The phone's ringing. — I'll answer it.", 'التليفون بيرن. — هرد أنا.')}</li>
        <li><b>توقع / رأي:</b> (think · believe · probably · perhaps · I'm sure)${ex('I think it will rain tomorrow.', 'أظن هتمطر بكره.')}</li>
        <li><b>وعد / عرض / تحذير / طلب:</b>${ex("I promise I won't tell anyone. — Will you open the door?", 'أوعدك مش هقول لحد. — ممكن تفتح الباب؟')}</li>
      </ol>
      <h4>be going to + V1</h4>
      ${fm('am / is / are + going to + V1 &nbsp;&nbsp;→ We <b>are going to</b> visit Luxor.')}
      <ol>
        <li><b>خطة / نية متقررة قبل الكلام:</b>${ex("We've bought the tickets. We're going to visit Luxor next month.", 'اشترينا التذاكر. هنزور الأقصر الشهر الجاي.')}</li>
        <li><b>توقع مبني على دليل قدامك دلوقتي:</b>${ex("Look at those clouds! It's going to rain.", 'بص على السحاب! هتمطر.')}</li>
      </ol>
      <div class="ls-note">📌 الفرق الأساسي: <b class="en">will</b> = قرار لحظي / رأي شخصي. <b class="en">going to</b> = خطة متقررة / دليل ظاهر.</div>
      <h4>طرق تانية للتعبير عن المستقبل</h4>
      ${ex("I'm meeting the supervisor at 5 tomorrow.", 'Present Continuous ← ميعاد مرتب ومتفق عليه.')}
      ${ex('The train leaves at 8 tomorrow.', 'Present Simple ← جدول / مواعيد ثابتة.')}
      <h4>⚠️ بعد when / if / as soon as / before / after / until</h4>
      <p>مبنحطش <span class="en">will</span> بعدهم — بنستخدم <b>حاضر</b> (وأحيانًا Present Perfect):</p>
      ${fx('If it will rain, we will stay home.', 'If it rains, we will stay home.', '')}
      ${fx('I will call you as soon as I will arrive.', 'I will call you as soon as I arrive.', '')}
      ${ex("I'll call you after I have finished the report.", 'هكلمك بعد ما أكون خلصت التقرير.')}
      <h4>الكلمات الدالة</h4>
      <p class="en">tomorrow · tonight · next week / month / year · soon · in two days · later · in 2030 · in the future</p>
    ` },

    // ──────────────────────────────────────────────
    { id: 'mistakes', icon: '🚫', title: 'أخطاء شائعة (وإزاي تتجنبها)', html: `
      ${fx('I have seen him yesterday.', 'I saw him yesterday.', 'وقت محدد منتهي ← Past Simple.')}
      ${fx('Did you went there?', 'Did you go there?', 'بعد did ← V1.')}
      ${fx("She didn't came.", "She didn't come.", 'بعد didn\'t ← V1.')}
      ${fx('I live here since 2019.', "I've lived here since 2019.", 'since ← Present Perfect.')}
      ${fx('I am living here for five years.', "I've lived here for five years.", 'for + مدة مستمرة ← Present Perfect.')}
      ${fx('When have you arrived?', 'When did you arrive?', 'when ← Past Simple.')}
      ${fx('He has went home.', 'He has gone home.', 'بعد has ← V3 (gone).')}
      ${fx("She haven't finished.", "She hasn't finished.", 'she ← has.')}
      ${fx("I haven't never been there.", "I have never been there. / I haven't ever been there.", 'مبنكرّرش النفي.')}
      ${fx('I have just came.', 'I have just come.', 'V3 بتاعة come هي come.')}
      ${fx('If it will rain, …', 'If it rains, …', 'بعد if ← حاضر.')}
      ${fx('She will goes.', 'She will go.', 'بعد will ← V1 من غير s.')}
    ` },

    // ──────────────────────────────────────────────
    { id: 'steps', icon: '🪜', title: 'خطوات تختار بيها الزمن الصح', html: `
      <ol>
        <li><b>الحدث لسه هيحصل؟</b> ← <span class="en">will + V1</span> (أو <span class="en">going to</span> لو خطة/دليل).</li>
        <li><b>اتذكر وقت محدد خلص؟</b> (<span class="en">yesterday · ago · last · in 2019 · when</span>) ← <span class="en">V2</span>.</li>
        <li><b>فيه</b> <span class="en">for · since · already · yet · just · ever · never · so far · this week · today</span>؟ ← <span class="en">have/has + V3</span>.</li>
        <li><b>مفيش كلمة؟</b> اسأل: هل بتتكلم عن <b>النتيجة دلوقتي</b> أو الخبرة؟ ← Present Perfect. بتحكي حدث خلص؟ ← Past Simple.</li>
        <li><b>ركّب الصيغة:</b> <span class="en">did + V1 · have/has + V3 · will + V1</span> — وراجع V2/V3 في الجدول لو الفعل شاذ.</li>
      </ol>
      <div class="ls-note">✅ جرّب دلوقتي: اضغط "ابدأ التمارين" واختار "📘 بنك الأسئلة الجاهز فقط" من النطاق.</div>
    ` },

    // ──────────────────────────────────────────────
    { id: 'irregular', icon: '📋', title: 'جدول الأفعال الشاذة (V1 / V2 / V3)', html: `
      <p>اتعلّمها على دفعات (5 كل يوم). الأفعال الشاذة هي أكتر سبب للغلط في Past Simple و Present Perfect.</p>
      ${irrTable}
    ` }
  ];
})();
