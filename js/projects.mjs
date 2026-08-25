/**
 * The project index.
 *
 * Descriptions are written from each project's own README or repository
 * description rather than invented, and `live` is only set where a
 * GitHub Pages site was verified to exist.
 */

export const CATEGORIES = ["toolkit", "privacy", "text", "creative", "agents", "research", "eval"];

export const PROJECTS = [
  // -- the merged toolkit (featured) --------------------------------------
  {
    id: "clearbox",
    category: "toolkit",
    featured: true,
    repo: "https://github.com/wedo911/clearbox",
    live: "https://wedo911.github.io/clearbox/",
    en: {
      name: "clearbox",
      desc: "Seven privacy and accessibility tools in one place: scam message checker, contract and terms scanner, password checker, photo GPS/EXIF remover, WCAG contrast and colour-blindness simulator, plain-language simplifier, and group expense splitter. Everything runs in your browser — nothing is uploaded.",
    },
    ar: {
      name: "كلير بوكس",
      desc: "سبع أدوات للخصوصية وسهولة الوصول في مكان واحد: فاحص رسائل الاحتيال، فاحص العقود والشروط، فاحص كلمات المرور، مُزيل بيانات الموقع من الصور، فاحص تباين الألوان ومحاكي عمى الألوان، مبسّط النصوص، ومقسّم النفقات. كل شيء يعمل داخل متصفحك — لا يُرفع أي شيء.",
    },
  },

  // -- privacy & safety ----------------------------------------------------
  {
    id: "cite-lens",
    category: "research",
    repo: "https://github.com/wedo911/cite-lens",
    live: "https://wedo911.github.io/cite-lens/",
    en: { name: "CiteLens", desc: "Paste a document plus its reference list and find uncited claims and unused references. Fully offline in the browser." },
    ar: { name: "سايت لنس", desc: "الصق مستندًا مع قائمة مراجعه لتكتشف الادعاءات غير الموثّقة والمراجع غير المستخدمة. يعمل بالكامل دون اتصال داخل المتصفح." },
  },
  {
    id: "coherence-lens",
    category: "text",
    repo: "https://github.com/wedo911/coherence-lens",
    live: "https://wedo911.github.io/coherence-lens/",
    en: { name: "CoherenceLens", desc: "Scan a long document for internal contradictions and mismatched numbers or dates. Arabic-first, multilingual, fully in-browser." },
    ar: { name: "كوهيرنس لنس", desc: "افحص مستندًا طويلاً بحثًا عن التناقضات الداخلية وعدم تطابق الأرقام أو التواريخ. يدعم العربية أولاً ومتعدد اللغات، ويعمل بالكامل داخل المتصفح." },
  },
  {
    id: "ground-lens",
    category: "research",
    repo: "https://github.com/wedo911/ground-lens",
    live: "https://wedo911.github.io/ground-lens/",
    en: { name: "GroundLens", desc: "Check whether each claim in a text is actually supported by its reference — supported, weak, unsupported, or contested. Offline." },
    ar: { name: "جراوند لنس", desc: "تحقّق مما إذا كان كل ادعاء في النص مدعومًا فعلًا بمرجعه — مدعوم، ضعيف، غير مدعوم، أو محل خلاف. يعمل دون اتصال." },
  },
  {
    id: "meaning-diff",
    category: "text",
    repo: "https://github.com/wedo911/meaning-diff",
    live: "https://wedo911.github.io/meaning-diff/",
    en: { name: "MeaningDiff", desc: "Compare two texts by meaning rather than by words. Multilingual (100+ languages, Arabic-first), fully in-browser." },
    ar: { name: "مينينج ديف", desc: "قارن نصين حسب المعنى لا حسب الكلمات. متعدد اللغات (أكثر من 100 لغة، والعربية أولاً)، ويعمل بالكامل داخل المتصفح." },
  },
  {
    id: "time-lens",
    category: "text",
    repo: "https://github.com/wedo911/time-lens",
    live: "https://wedo911.github.io/time-lens/",
    en: { name: "TimeLens", desc: "Paste a long document and extract dated events into a sorted timeline. Understands both Arabic and English dates." },
    ar: { name: "تايم لنس", desc: "الصق مستندًا طويلاً لاستخراج الأحداث المؤرّخة وترتيبها في خط زمني. يفهم التواريخ العربية والإنجليزية معًا." },
  },
  {
    id: "dialect-lens",
    category: "text",
    repo: "https://github.com/wedo911/dialect-lens",
    live: "https://wedo911.github.io/dialect-lens/",
    en: { name: "DialectLens", desc: "Detect Arabic dialect — Modern Standard, Egyptian, Levantine, Gulf, or Maghrebi — from pasted text, entirely offline." },
    ar: { name: "دايالكت لنس", desc: "تعرّف على اللهجة العربية — الفصحى، المصرية، الشامية، الخليجية، أو المغاربية — من نص ملصق، دون اتصال تمامًا." },
  },
  {
    id: "surprise-lens",
    category: "text",
    repo: "https://github.com/wedo911/surprise-lens",
    live: "https://wedo911.github.io/surprise-lens/",
    en: { name: "SurpriseLens", desc: "A heatmap of which words in a text are predictable versus surprising. Runs fully in the browser." },
    ar: { name: "سربرايز لنس", desc: "خريطة حرارية تُظهر أي كلمات النص متوقّعة وأيها مفاجئة. يعمل بالكامل داخل المتصفح." },
  },
  {
    id: "doselint",
    category: "privacy",
    repo: "https://github.com/wedo911/doselint",
    live: "https://wedo911.github.io/doselint/",
    en: { name: "doselint", desc: "Local-first linter for error-prone medication dose notation and abbreviations — the kind of ambiguity that causes real dosing mistakes." },
    ar: { name: "دوز لينت", desc: "أداة محلية لفحص صياغات جرعات الدواء والاختصارات المعرّضة للخطأ — نوع الالتباس الذي يسبب أخطاء جرعات حقيقية." },
  },
  {
    id: "deadlinelint",
    category: "text",
    repo: "https://github.com/wedo911/deadlinelint",
    live: "https://wedo911.github.io/deadlinelint/",
    en: { name: "deadlinelint", desc: "Find ambiguous dates, relative deadlines, and times without a clear timezone in public-facing text." },
    ar: { name: "ديدلاين لينت", desc: "اعثر على التواريخ الغامضة والمواعيد النسبية والأوقات بلا منطقة زمنية واضحة في النصوص الموجّهة للجمهور." },
  },
  {
    id: "alertparity",
    category: "privacy",
    repo: "https://github.com/wedo911/alertparity",
    live: "https://wedo911.github.io/alertparity/",
    en: { name: "alertparity", desc: "Offline checks that multilingual emergency alerts carry the same protected facts in every language — so a translation doesn't drop a critical detail." },
    ar: { name: "أليرت باريتي", desc: "فحوصات دون اتصال تتأكد أن تنبيهات الطوارئ متعددة اللغات تحمل نفس الحقائق الجوهرية بكل لغة — كي لا تُسقط الترجمة تفصيلاً حرجًا." },
  },
  {
    id: "cellveil",
    category: "privacy",
    repo: "https://github.com/wedo911/cellveil",
    live: "https://wedo911.github.io/cellveil/",
    en: { name: "cellveil", desc: "Local-first audit for small count cells and recoverable suppressions in published statistics — a real re-identification risk in open data." },
    ar: { name: "سِل فيل", desc: "تدقيق محلي للخلايا ذات الأعداد الصغيرة والحجب القابل للاسترجاع في الإحصاءات المنشورة — خطر حقيقي لإعادة تحديد الهوية في البيانات المفتوحة." },
  },

  // -- creative -------------------------------------------------------------
  {
    id: "maqam-studio",
    category: "creative",
    repo: "https://github.com/wedo911/maqam-studio",
    live: "https://wedo911.github.io/maqam-studio/",
    en: { name: "Maqam Studio", desc: "Hear and explore Arabic maqams (Ajam, Hijaz, Bayati, Saba, Rast, Sikah, Kurd and more) with true microtones, compose and export. Fully offline." },
    ar: { name: "استوديو المقام", desc: "استمع واستكشف المقامات العربية (عجم، حجاز، بياتي، صبا، راست، سيكاه، كرد وغيرها) بأرباع النغمة الحقيقية، مع التأليف والتصدير. يعمل دون اتصال تمامًا." },
  },
  {
    id: "zellige-studio",
    category: "creative",
    repo: "https://github.com/wedo911/zellige-studio",
    live: "https://wedo911.github.io/zellige-studio/",
    en: { name: "Zellige Studio", desc: "Parametric Islamic star-pattern generator — tune symmetry, grid and inner ratio to produce rosette and girih patterns, export as SVG or PNG." },
    ar: { name: "استوديو الزليج", desc: "مولّد بارامتري للزخارف النجمية الإسلامية — اضبط التماثل والشبكة والنسبة الداخلية لتوليد أنماط الوردة والجيريه، وصدّرها بصيغة SVG أو PNG." },
  },

  // -- tools for AI agents (MCP servers & libraries) -------------------------
  {
    id: "citeguard",
    category: "agents",
    featured: true,
    repo: "https://github.com/wedo911/citeguard",
    en: { name: "citeguard", desc: "Check whether a citation has been retracted, corrected, or flagged with an expression of concern, via Crossref. Ships as a Python library and CLI, an MCP server for AI agents, and a GitHub Action for CI — all sharing one detection algorithm verified against real Crossref data." },
    ar: { name: "سايت جارد", desc: "تحقّق مما إذا كان أي مرجع علمي قد سُحب أو صُحّح أو صدر بشأنه تحذير، عبر Crossref. يأتي كمكتبة Python وأداة سطر أوامر، وخادم MCP لوكلاء الذكاء الاصطناعي، وإجراء GitHub للتكامل المستمر — جميعها بخوارزمية كشف واحدة تم التحقق منها ببيانات Crossref حقيقية." },
  },
  {
    id: "sourceward",
    category: "agents",
    repo: "https://github.com/wedo911/sourceward",
    en: { name: "sourceward", desc: "Zero-dependency scanner for prompt-injection indicators in untrusted text — hidden Unicode, encoded payloads, instruction overrides — for the boundary where external content enters an AI agent." },
    ar: { name: "سورس وارد", desc: "ماسح بلا اعتماديات لمؤشرات حقن الأوامر في النصوص غير الموثوقة — يونيكود مخفي، حمولات مُرمَّزة، تجاوز التعليمات — عند الحدّ الذي يدخل منه المحتوى الخارجي إلى وكيل الذكاء الاصطناعي." },
  },
  {
    id: "secretscan-mcp-server",
    category: "agents",
    repo: "https://github.com/wedo911/secretscan-mcp-server",
    en: { name: "secretscan MCP server", desc: "Scans a diff, file, or snippet for leaked secrets (AWS, GitHub, Slack, Stripe keys, private keys, JWTs) before an agent commits or shares it. Findings are always redacted." },
    ar: { name: "خادم secretscan", desc: "يفحص أي تغيير أو ملف أو مقطع بحثًا عن أسرار مسرّبة (مفاتيح AWS وGitHub وSlack وStripe، مفاتيح خاصة، رموز JWT) قبل أن يرتكبها الوكيل أو يشاركها. النتائج مموّهة دائمًا." },
  },
  {
    id: "regexguard-mcp-server",
    category: "agents",
    repo: "https://github.com/wedo911/regexguard-mcp-server",
    en: { name: "regexguard MCP server", desc: "Explains what a regular expression actually matches, and flags catastrophic-backtracking (ReDoS) risk — without ever executing the pattern." },
    ar: { name: "خادم regexguard", desc: "يشرح ما الذي يطابقه التعبير النمطي فعليًا، ويرصد خطر التراجع الكارثي (ReDoS) — دون تنفيذ النمط إطلاقًا." },
  },
  {
    id: "readability-mcp-server",
    category: "agents",
    repo: "https://github.com/wedo911/readability-mcp-server",
    en: { name: "readability MCP server", desc: "Lets an AI agent score and simplify the plain-language readability of its own output before showing it to a person." },
    ar: { name: "خادم readability", desc: "يتيح لوكيل الذكاء الاصطناعي قياس وتبسيط سهولة قراءة مخرجاته قبل عرضها على إنسان." },
  },
  {
    id: "earpatch",
    category: "agents",
    repo: "https://github.com/wedo911/earpatch",
    en: { name: "earpatch", desc: "Screen-reader-first narration for Git and unified diffs — making code review genuinely usable without sight." },
    ar: { name: "إير باتش", desc: "سرد مخصّص لقارئات الشاشة لفروقات Git — يجعل مراجعة الكود قابلة للاستخدام فعليًا دون إبصار." },
  },

  // -- AI evaluation integrity suite ----------------------------------------
  {
    id: "eval-suite",
    category: "eval",
    isGroup: true,
    repo: "https://github.com/wedo911?tab=repositories&q=proof",
    members: [
      "agentbudgetproof", "artifactscopeproof", "contextparity", "decodepolicyproof",
      "denomguard", "evalenvproof", "evaljoinproof", "exclusionparity", "freshsessionproof",
      "historypolicyproof", "holdoutproof", "judgeblindproof", "judgeparseguard",
      "judgerouteproof", "outputparseproof", "promptstackproof", "ratecardproof",
      "retryparity", "retrypolicyproof", "runorderparity", "scorecontractproof",
      "stoppolicyproof", "timepolicyproof", "toolresultparity", "toolschemaparity",
      "truncationparity",
    ],
    en: {
      name: "AI evaluation integrity suite",
      desc: "A family of small auditing tools that check whether an AI model comparison was actually fair: did both arms get the same prompts, the same tools, the same retry policy, the same time and token budgets, the same judge routing, the same inclusion rules? Benchmark results are only meaningful if the arms were genuinely comparable, and these check exactly that.",
    },
    ar: {
      name: "حزمة نزاهة تقييم الذكاء الاصطناعي",
      desc: "مجموعة أدوات تدقيق صغيرة تتحقق مما إذا كانت المقارنة بين نماذج الذكاء الاصطناعي عادلة فعلًا: هل حصل الطرفان على نفس الأوامر، ونفس الأدوات، ونفس سياسة إعادة المحاولة، ونفس ميزانيات الوقت والرموز، ونفس توجيه الحكم، ونفس قواعد الاستبعاد؟ نتائج المقارنات لا معنى لها إلا إذا كانت الأطراف متكافئة حقًا، وهذا ما تفحصه هذه الأدوات بالضبط.",
    },
  },
  {
    id: "synthcardlint",
    category: "eval",
    repo: "https://github.com/wedo911/synthcardlint",
    live: "https://wedo911.github.io/synthcardlint/",
    en: { name: "synthcardlint", desc: "Audit synthetic dataset cards for provenance, privacy, quality, licensing, limitations and contamination disclosures." },
    ar: { name: "سينث كارد لينت", desc: "تدقيق بطاقات مجموعات البيانات الاصطناعية من حيث المصدر والخصوصية والجودة والترخيص والقيود والإفصاح عن التلوث." },
  },
  {
    id: "caveatdiff",
    category: "eval",
    repo: "https://github.com/wedo911/caveatdiff",
    live: "https://wedo911.github.io/caveatdiff/",
    en: { name: "caveatdiff", desc: "Review what material disclosures changed between two versions of an AI model card — including limitations quietly dropped." },
    ar: { name: "كافييت ديف", desc: "راجع ما تغيّر من إفصاحات جوهرية بين نسختين من بطاقة نموذج ذكاء اصطناعي — بما في ذلك القيود التي حُذفت بهدوء." },
  },
  {
    id: "approvelens",
    category: "eval",
    repo: "https://github.com/wedo911/approvelens",
    live: "https://wedo911.github.io/approvelens/",
    en: { name: "approvelens", desc: "Audit whether an AI tool-approval dialog faithfully represents the raw payload the user is actually approving." },
    ar: { name: "أبروف لنس", desc: "تدقيق ما إذا كانت نافذة الموافقة على أداة الذكاء الاصطناعي تمثّل بأمانة الحمولة الفعلية التي يوافق عليها المستخدم." },
  },
  {
    id: "sunsetlint",
    category: "eval",
    repo: "https://github.com/wedo911/sunsetlint",
    live: "https://wedo911.github.io/sunsetlint/",
    en: { name: "sunsetlint", desc: "Build and validate a graceful sunset plan for an open-source project, so users aren't stranded when maintenance stops." },
    ar: { name: "صن سِت لينت", desc: "أنشئ وتحقّق من خطة إنهاء لائقة لمشروع مفتوح المصدر، كي لا يُترك المستخدمون في مأزق عند توقف الصيانة." },
  },
];
