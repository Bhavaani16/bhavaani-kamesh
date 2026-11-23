/* Edit this file. The page, the icon sheet, and the printable resume all read it.
   Pencil notes are visible on the site on purpose. Delete a note once you have confirmed the fact. */
window.SITE = {
  name: "Bhavaani Kamesh",
  role: "AI product manager and researcher",
  location: "Long Beach, California",
  email: "bhavaanikamesh@gmail.com",
  site: "https://bhavaani16.github.io/bhavaani-kamesh",
  links: {
    linkedin: "https://www.linkedin.com/in/bhavaani-kamesh/",
    github: "https://github.com/Bhavaani16",
    medium: "https://medium.com/@bhavaanikamesh",
    resume: "Bhavaani_Kamesh_Resume.pdf"
  },
  ledes: {
    product: "I build AI that has to show its work before anything is allowed to move.",
    research: "I want to study how a person and a model can collaborate so the human still gets a good deal, and trust is earned."
  },
  heroNote: "Same rule in the lab and in the product: a person, or a deterministic check, clears the action.",
  portrait: {
    src: "portrait.jpg",
    alt: "Bhavaani Kamesh outdoors in Long Beach, in a white bandana, sunglasses, and denim overalls.",
    caption: "The person filing this"
  },
  about: [
    "I sit in a slightly inconvenient spot on purpose. I can read the model, and I can also say whether anyone should trust it with a real decision.",
    "At Honeywell Aerospace I worked on vulnerability data for embedded aircraft systems, and shipped Python and Neo4j tooling so findings could be traced to NIST CVE, CWE, and CAPEC. At Dell I launched a self-service chatbot for an identity team and watched incident tickets fall 15% in the first month. With EDRAY I owned an import-arrival forecast that placed first of ten teams.",
    "The habit underneath those jobs is the doctorate I want. I want to study human and AI collaboration when it actually works for the person: not a model that sounds helpful, but a partnership in which trust is deserved and the human still gets a good deal. A citation gets checked against the page. A generated query is allowed to read, not write. On the wildfire evacuation desk, an emergency manager approves every dispatch. A schedule for the grid waits until a person replies yes."
  ],
  facts: [
    { k: "Now", v: "M.S. Information Systems, CSU Long Beach, through 2027" },
    { k: "Research", v: "AI for EV charging, Electrical Engineering, with Dr. Ebrahim Amiri and Dr. Saleh Al Jufout" },
    { k: "Before", v: "Associate product manager, Honeywell Aerospace. Software engineering intern, Dell." },
    { k: "Languages", v: "Kannada, English, and a working bit of Hindi" },
    { k: "Also", v: "Aspire Leaders Program, Cohort 4, 2026. IEEE Women in Engineering student chair, 2022." }
  ],
  researchIntro: "The PhD I want is about human and AI collaboration that succeeds for the person: trust that is earned, and a deal the human would still take after seeing the work. I don't have a published paper yet. What I do have are systems where that question already had to be designed, not just discussed.",
  questions: [
    {
      id: "H1",
      q: "When a person and a model work together, what has to be true for the human to get a good deal?",
      method: "Trust is not a vibe I add at the end. It is a structure. The person can see what the model did, refuse it, and is not talked into a worse outcome. On the IBM wildfire desk, agents explain the plan and draft alerts. Routes and risk stay in deterministic engines. An emergency manager approves every dispatch. If the collaboration cannot survive that pause, it is not a collaboration yet.",
      lens: "research"
    },
    {
      id: "H2",
      q: "How do you prove a generated sentence was actually in the source?",
      method: "ClauseGuard runs a citation-verification agent over SEC 10-Ks and strips any claim the retrieved text does not support. A local cosmology assistant does the smaller version of the same thing: if the chunk is not in the corpus, it refuses. I would rather return nothing than a fluent miss.",
      lens: "research"
    },
    {
      id: "H3",
      q: "What does a forecast owe the person who has to act on it?",
      method: "At EDRAY the useful number was not a leaderboard score in the abstract. It was an error, in days, at a specific milestone, so an operations team could tell how much the ETA was worth. I care about staged error, baselines, and what the number is allowed to change.",
      lens: "both"
    },
    {
      id: "H4",
      q: "How should a planner schedule EVs, compute, and cooling when both the forecast and the hardware miss?",
      method: "This is the question I walked into my research assistantship with. GridPulse is the product-shaped cousin: a mixed-integer program proposes a plan, every savings figure is labeled simulated, and nothing is applied until a person approves it. The PhD question sitting above both is the same one: did the human get a deal they can trust, or only a fluent suggestion?",
      lens: "research"
    }
  ],
  studies: [
    {
      id: "clauseguard",
      icon: "clauseguard",
      title: "ClauseGuard",
      kicker: "Multi-agent RAG for SEC filings",
      when: "Jun 2026 – Jul 2026",
      metric: "159-case golden set",
      audience: "research",
      problem: "Compliance questions over a 10-K fail in a specific way: the answer sounds right and the citation is decorative. I wanted a system that treats an unsupported claim as a bug, not a style issue.",
      context: "Analysts and anyone else who has to stand behind a sentence about a public company. The corpus is real EDGAR filings, not a toy FAQ.",
      role: "I designed the pipeline, the evaluation, and the product surface. This is an independent build.",
      approach: [
        "A LangGraph state machine with typed nodes: router, retrieval, extraction, cross-filing comparison, citation verifier, and risk scorer.",
        "Ingestion of 12 actual 10-Ks across 10 sectors, with section-aware chunks so the document structure survives.",
        "Eval before polish: a 159-case golden set, including adversarial cases where the answer is not in the filing. The harness scores faithfulness, citation accuracy, and context precision and recall. I have not published a single headline score, because the point of the harness is the regression, not a vanity number.",
        "FastAPI with auth, rate limits, and an async job queue. Streamlit for the review UI, with citations that link back to SEC.gov. Forty unit tests run without a live model."
      ],
      results: "The system is built to abstain. When the filing does not contain the answer, it says so. Risk flags are zero-shot labels (material weakness, going concern, litigation, covenant breach) with a severity, and every surviving claim is supposed to point at a passage.",
      learned: "The model call is the small part. The product is the refusal, the trace, and a test that fails when a later prompt gets more fluent and less honest.",
      links: [
        { label: "Repository", href: "https://github.com/Bhavaani16/ClauseGuard" }
      ]
    },
    {
      id: "edray",
      icon: "arrival",
      title: "Import arrival, EDRAY",
      kicker: "Forecasting product for port logistics",
      when: "Jan 2026 – May 2026",
      metric: "1st of 10 teams",
      audience: "product",
      problem: "Import shipments disappear between the vessel and the warehouse gate. Operations teams plan labor and yard space against ETAs that go stale at every handoff.",
      context: "A company-wide logistics forecasting challenge with EDRAY, run while I was at CSU Long Beach. The users were the people scheduling what happens after a container hits the terminal.",
      role: "I scoped the problem, set the success metric, engineered the features, and chose the model. LinkedIn lists the role as AI Product Manager, seasonal.",
      approach: [
        "Cleaned a set of 439,919 import records and 31 fields. Features came from the work, not from a generic table: port dwell, customs lag, planning horizon, terminal volume, rail indicators, seasonality, holiday proximity, and how wrong the previous ETA had been.",
        "Staged the forecast. T1 is the vessel still at sea. T5 is terminal egress. The product question was which milestone is worth predicting, not whether machine learning is exciting.",
        "Compared linear regression, trees, KNN, SVR, random forest, gradient boosting, and XGBoost. XGBoost won both published stages. A separate classifier estimates detention risk, with SMOTE when the classes are lopsided."
      ],
      results: "First place among 10 teams. On the published evaluation, XGBoost reached 3.67-day mean absolute error while the vessel was at sea, and 1.89 days at terminal egress. The README notes that this verified table comes from the streamlined script with a 25,000-row training cap. The full cleaned set is 439,919 records. Accuracy improves once later milestones exist, which is the operational point: wait for the discharge event and the ETA becomes something you can staff against.",
      learned: "A launch bar stated in days is easier to defend than a model name. I would rather ship the T5 number, with its caveat, than imply the vessel-stage error is the same thing.",
      links: [
        { label: "Repository", href: "https://github.com/Bhavaani16/DC-Arrival-Prediction" }
      ]
    },
    {
      id: "gridpulse",
      icon: "gridpulse",
      title: "GridPulse",
      kicker: "Scheduling compute, cooling, and EV charging",
      when: "Nov 2026",
      metric: "A person still has to say yes",
      audience: "both",
      problem: "Flexible electric load — data-center jobs, cooling, EV charging — can move in time. Most demos move it and then announce the savings. I wanted the savings to stay a proposal until a human accepted the plan.",
      context: "A hackathon build. Eight jobs, twenty-four hourly slots, synthetic CAISO-style prices and water-stress rows. Not a forecast for a real site. I say that on every screen of the demo, and I will say it here.",
      role: "I specified the optimizer, the approval state machine, and the rule that model prose cannot invent numbers. Much of the code was written by agents against a written spec, then reviewed and tested.",
      approach: [
        "One mixed-integer linear program (HiGHS) minimizes a weighted mix of cost and carbon, subject to a water cap set by a slider. Alpha 0 ignores water. Alpha 1 allows no wet cooling.",
        "Moving the slider never applies anything. Requesting approval sends an SMS. Only YES or NO from the operator number counts. Silence expires the proposal after 300 seconds. The on-screen Approve button runs the same state machine.",
        "The explanation is checked. If a number in the model's paragraph does not match the schedule summary within 0.05, the UI throws the paragraph out and shows a template, labeled as a fallback.",
        "Applied schedules can be written to an SPL memo on Solana devnet. The hardware fan is simulated. Fetch.ai agents negotiate locally and are not registered on Agentverse."
      ],
      results: "On the committed sample, which is simulated: baseline cost $5.63 and 30.29 kg CO2, versus $2.86 and 11.45 kg at alpha 0. Water falls from 104.06 L to 0 L at alpha 1, and dry cooling goes from 0% to 100%. Backend, optimizer, and agent tests: 80 passed. Frontend tests: 12 passed.",
      learned: "Labeling a number SIMULATED is a product decision, not a footnote. The interesting research problem is the one this demo only sketches: a plan that stays safe when the price forecast and the real converter disagree.",
      links: [
        { label: "Repository", href: "https://github.com/Bhavaani16/GridPulse" },
        { label: "Live demo", href: "https://45-32-137-12.sslip.io" }
      ]
    },
    {
      id: "askdata",
      icon: "askdata",
      title: "Ask Your Data",
      kicker: "Plain English in, SQL out, for product managers",
      when: "Mar 2026",
      metric: "SELECT only",
      audience: "product",
      problem: "The product managers I know ask a 30-second question and wait on a 24-hour Slack thread. \"Revenue by region this quarter\" should not require a data engineer in the loop every time. It also should not let a language model write to the warehouse.",
      context: "PMs who can read a table and should not have to trust a black box. Ships with a sample e-commerce database so someone can try it immediately, or connect PostgreSQL, MySQL, Snowflake, or BigQuery.",
      role: "Sole builder. I treated the model as the easy part and the trust decisions as the product.",
      approach: [
        "The generated SQL is always visible, editable, and paired with a one-line plain-English explanation.",
        "A validator rejects anything that is not a single SELECT. Whatever the model emits, the data cannot be modified.",
        "Sending sample rows to the model is off by default when you connect a real database. Opt-in, not opt-out.",
        "The model is Hugging Face's Qwen2.5-Coder-32B, so there is a self-hosted path and no requirement to send the schema to a proprietary API."
      ],
      results: "A working web app: question, SQL, result table, and a chart the app picks. No production usage numbers. I am not going to invent a time-saved metric.",
      learned: "The full schema is stuffed into every prompt, and that will break on a 200-table warehouse. The next version needs schema retrieval. The lesson generalizes: the demo works because the database is small, and I should say so before anyone calls it a platform.",
      links: [
        { label: "Repository", href: "https://github.com/Bhavaani16/ask-your-data" }
      ]
    },
    {
      id: "reels",
      icon: "reels",
      title: "A queue for reels in DMs",
      kicker: "Instagram, one weekend, one friction point",
      when: "Apr 2026",
      metric: "Zero new surfaces",
      audience: "product",
      problem: "When a friend sends five reels in a row, you watch one, fall back into the thread, find the next, and repeat. Five reels, five interruptions. People adapt to it, which is why it never shows up in a support queue.",
      context: "Anyone who receives a burst of reels from one person. I noticed it because I was the user who stopped halfway through a batch. Not because the videos were bad. Because the handoff was.",
      role: "I framed the problem, set the constraint, and built the prototype. It is a concept, not an Instagram feature I shipped to their users.",
      approach: [
        "Success, written before the code: watch a whole batch of consecutive reels without returning to the thread, and add no new surface, tab, or button that needs explaining.",
        "The queue breaks at the first text message or a different sender. A text is a turn in the conversation. The feature should not swallow it.",
        "The mechanic borrows Stories, which people already know: swipe, progress, auto-advance, then back to the thread.",
        "A toggle in the prototype lets you feel the current behavior and the queue back to back. The argument is the difference, not a slide."
      ],
      results: "A live Next.js prototype. The core is one pure function, findReelContext, that walks backward and forward from the reel you tapped. No adoption metric, because this never met Instagram's users. The thing I can show is the decision and the build.",
      learned: "The best constraint was the prohibition. Once I was not allowed to invent a new screen, the design got quieter and more serious. I wrote the teardown up on Medium the way I would explain it to an engineer sitting next to me.",
      links: [
        { label: "Live demo", href: "https://instagram-reel-queue-ufr5.vercel.app" },
        { label: "Repository", href: "https://github.com/Bhavaani16/instagram_reel_queue" },
        { label: "Essay", href: "https://medium.com/@bhavaanikamesh/i-spotted-a-friction-point-in-instagram-dms-and-shipped-a-fix-in-a-weekend-23bf6cb24cec" }
      ]
    }
  ],
  bench: [
    {
      icon: "cosmos",
      title: "A local RAG for cosmology",
      text: "Docker, Ollama, and Mistral 7B, offline. Fixed chunks of 500 characters with a 50-character overlap. On a 7-question suite, 6 retrieved relevant context (85.7% hit rate). Asked something the corpus does not know, it refused. I also published 0.23 seconds average latency for that suite. Treat that figure as retrieval-speed territory, not as a claim about long answers.",
      href: "https://github.com/Bhavaani16/Simple_RAG_Chatbot",
      label: "Repository"
    },
    {
      icon: "motor",
      title: "Edge diagnostics for motors",
      text: "Still in the architecture design phase. There is no prototype. The design is offline, explainable motor-fault diagnosis: sandboxed feature extraction, retrieval over local manuals, and an on-device Liquid LFM, with safety-critical actuation kept deterministic and outside the model. Started July 2026.",
      href: "",
      label: ""
    },
    {
      icon: "fab",
      title: "FabGuardian",
      text: "A predictive-maintenance agent for a semiconductor fab. Sensor streams, a Mahalanobis anomaly score, and automatic P1 or P2 work orders. Built with Varshith Sai on watsonx Orchestrate. The demo injects anomalies. It is not a claim about a real fab's downtime.",
      href: "https://github.com/Bhavaani16/predictive_maintenance_agent",
      label: "Repository"
    },
    {
      icon: "gtm",
      title: "AI GTM engine",
      text: "Account enrichment, an LLM score against an ideal-customer profile, then a DuckDB funnel. On the demo data, tier-1 accounts reply at 50%, tier-2 at 15%, and tier-3 at 0%. Those are demo rows, which the README says outright. Useful as a picture of how I would evaluate a score. Not a customer result.",
      href: "https://bhavaani16.github.io/ai-gtm-engine/",
      label: "Live dashboard"
    },
    {
      icon: "protein",
      title: "Protein-design studio",
      text: "ESM-3 sequence generation and OpenFold3 structure prediction on a single AMD MI300X, wrapped in Streamlit, for rare-disease exploration. A studio, not a discovered protein. I am not claiming a biological result.",
      href: "https://github.com/Bhavaani16/Rare-Disease-Protein-Design-Studio",
      label: "Repository"
    },
    {
      icon: "golo",
      title: "GO-LOCO",
      text: "A marketing command center I built around Wispr Flow. Agents handle research, localization, and ad monitoring. A person approves everything before it goes live. The build is the same trust rule as the research: speed is allowed, an unreviewed send is not.",
      href: "https://wispr-local-cc.emergent.host/",
      label: "Live build"
    },
    {
      icon: "wildfire",
      title: "Wildfire evacuation desk",
      text: "The IBM AI Experiential Lab product is a wildfire-evacuation desk for residents who cannot leave on their own. Agents on IBM Granite explain plans and draft multilingual CAP alerts. Fire nowcast, risk, and OR-Tools routing stay deterministic. An emergency manager approves each dispatch. The eval plan is a no-hindsight replay of the January 2025 Eaton Fire across 100 synthetic populations, scored against real timing and zone orders, with Brier score and calibration on the forecasts. That is a plan and a metric, not an outcome. It is also the clearest place I have practiced the collaboration I want to study: the model may propose, and the person still holds the deal.",
      href: "",
      label: ""
    }
  ],
  experience: [
    {
      icon: "ra",
      title: "Research Assistant",
      org: "California State University, Long Beach",
      place: "Electrical Engineering · Hybrid",
      when: "Sep 2026 – present",
      kind: "Apprenticeship",
      bullets: [
        "Own the AI and machine-learning side of a project on electric-vehicle charging, under department chair Dr. Ebrahim Amiri and Dr. Saleh Al Jufout.",
        "Turn the research objectives into requirements, success criteria, and a validation plan, and present the tradeoffs to faculty.",
        "The work is three months old. I am not going to dress a research agenda up as a finding."
      ],
      resume: [
        "Own the AI/ML workstream for electric-vehicle charging under Dr. Ebrahim Amiri, department chair, and Dr. Saleh Al Jufout.",
        "Turn research objectives into requirements, success criteria, and a validation plan, and present tradeoffs to faculty."
      ]
    },
    {
      icon: "ibm",
      title: "AI Product Lead",
      org: "IBM AI Experiential Lab, CSU Long Beach",
      place: "Long Beach, California",
      when: "Sep 2026 – present",
      kind: "University lab",
      bullets: [
        "Set the product boundary for a wildfire-evacuation assistant motivated by the Eaton Fire: find residents who cannot leave alone, rank them by risk and deadline, and replan routes for a limited fleet every 5 to 10 minutes.",
        "Kept probabilities, deadlines, and routes in deterministic engines. watsonx Orchestrate agents explain the plan and draft alerts. An emergency manager approves every dispatch, and the decision is logged.",
        "Wrote the evaluation as a no-hindsight replay, not a demo. Headline metric: vulnerable residents out before the fire arrives. Forecasts scored separately, with a Brier score and a calibration check.",
        "Aligned ML engineers on shared data contracts, a five-week MVP, and the guardrails. Built with Claude and IBM Bob."
      ]
    },
    {
      icon: "edray",
      title: "AI Product Manager",
      org: "EDRAY Collaborative Port Logistics",
      place: "Long Beach, California · Hybrid",
      when: "Jan 2026 – May 2026",
      kind: "Seasonal",
      bullets: [
        "Placed first of 10 teams by scoping an import-arrival forecast, not by tuning a model in isolation.",
        "Turned 439,000+ shipment records into features an operations team could recognize: dwell, customs lag, seasonality, congestion, holidays.",
        "Set a 1.89-day error target at terminal egress and used it as the launch bar. XGBoost beat the other models I benchmarked, including random forest."
      ]
    },
    {
      icon: "honeywell",
      title: "Associate Product Manager",
      org: "Honeywell Aerospace Technologies",
      place: "Bengaluru, India · On-site",
      when: "Sep 2024 – Feb 2025",
      kind: "Full-time",
      bullets: [
        "Owned data quality for cyber vulnerability assessments of embedded aircraft communication systems, and mapped findings to NIST CVE, CWE, and CAPEC so the output could survive an audit.",
        "Designed and shipped Python and Neo4j pipelines that took the manual reporting off the engineers' desks. My resume and GitHub README put the processing-time cut at 75%, with 100% of findings mapped. LinkedIn describes the same pipeline without the percentage.",
        "Took a digital twin of an embedded aerospace device from concept to launch, with audit-ready outputs.",
        "Got three departments onto the same requirements and data standards, and accelerated that automation effort by 40%."
      ],
      resume: [
        "Owned data quality for cyber vulnerability assessments of embedded aircraft systems, mapping findings to NIST CVE, CWE, and CAPEC.",
        "Shipped Python and Neo4j pipelines that cut analyst processing time by 75%, with 100% of findings mapped to those frameworks.",
        "Took a digital twin of an embedded aerospace device from concept to launch, with audit-ready outputs.",
        "Aligned three departments on requirements and data standards, accelerating a cross-team automation effort by 40%."
      ]
    },
    {
      icon: "honeynode",
      title: "Software Engineer Intern",
      org: "Honeywell Aerospace Technologies",
      place: "Bengaluru, India · On-site",
      when: "Feb 2024 – Aug 2024",
      kind: "Internship",
      bullets: [
        "LinkedIn lists this internship immediately before the associate PM role, with Neo4j and data analysis among the skills. A longer public description was not on the profile, so I am not writing one.",
        "My one-page resumes fold this internship and the associate role into a single Honeywell line. The dates here follow LinkedIn, which splits them."
      ],
      resume: [
        "Internship focused on Neo4j and data analysis, immediately preceding the associate product manager role on the same embedded-systems work."
      ]
    },
    {
      icon: "varcons",
      title: "Project Intern",
      org: "Varcons Technologies",
      place: "Bengaluru, India · Remote",
      when: "Aug 2023 – Sep 2023",
      kind: "Internship",
      bullets: [
        "Built and tested a machine-learning model for chronic-disease risk from a client brief, and delivered it inside the two-month window.",
        "Wrote the design, the test results, and the limits in language a non-technical stakeholder could argue with. No accuracy figure is on the record, so none is here."
      ]
    },
    {
      icon: "dell",
      title: "Software Engineering Intern, Identity & Access",
      org: "Dell Technologies",
      place: "Bengaluru, India · Hybrid",
      when: "May 2023 – Jun 2023",
      kind: "Internship",
      bullets: [
        "Launched a self-service chatbot on Microsoft Power Platform for a 200-person identity and access team. Incident tickets dropped 15% in the first month.",
        "Read the usage logs, found where people got stuck, and ranked the next fixes from that. I projected a 40% workload reduction over the following two quarters. That second number is a forecast I made, not a result I measured.",
        "Worked with IT, data, and security so the bot followed identity practice instead of routing around it."
      ],
      resume: [
        "Launched a Power Platform self-service chatbot for a 200-person identity and access team. Incident tickets dropped 15% in month one.",
        "Used interaction logs to prioritize fixes. Projected a 40% workload reduction over the next two quarters from that usage data.",
        "Partnered with IT, data, and security so the bot followed identity-management practice."
      ]
    },
    {
      icon: "ieee",
      title: "Student Chair",
      org: "IEEE Women in Engineering",
      place: "Mysuru, India",
      when: "Jan 2022 – Dec 2022",
      kind: "Part-time",
      bullets: [
        "Chaired the student branch section of IEEE Women in Engineering at GSSS Institute of Engineering and Technology for Women.",
        "As sponsorship coordinator for the college fest Geethayaana, raised about 65k, more than the other departments. The profile does not name the currency."
      ],
      resume: [
        "Chaired the IEEE Women in Engineering student branch at GSSS Institute of Engineering and Technology for Women.",
        "As sponsorship coordinator for Geethayaana, raised about 65k, more than the other departments."
      ]
    }
  ],
  writing: [
    {
      icon: "essay-reels",
      title: "I spotted a friction point in Instagram DMs and shipped a fix in a weekend",
      date: "26 Jun 2026",
      href: "https://medium.com/@bhavaanikamesh/i-spotted-a-friction-point-in-instagram-dms-and-shipped-a-fix-in-a-weekend-23bf6cb24cec",
      take: "The queue breaks at the first text message, on purpose. A text is a new turn. The feature should not eat it.",
      featured: true,
      theme: "Product sense"
    },
    {
      icon: "essay-cosmos",
      title: "Building a fully local RAG system for cosmology",
      date: "7 Dec 2025",
      href: "https://medium.com/@bhavaanikamesh/building-a-fully-local-rag-system-for-cosmology-no-cloud-required-1c6566f3f416",
      take: "Offline, chunked, and willing to say \"that is not in the corpus.\" Hit rate 85.7% on a seven-question suite.",
      featured: true,
      theme: "Evaluation"
    },
    {
      icon: "essay-delta",
      title: "AI and digital twins, a memo aimed at Delta",
      date: "7 Dec 2025",
      href: "https://medium.com/@bhavaanikamesh/ai-digital-twins-the-next-operational-advantage-for-delta-air-lines-4cec44e5e645",
      take: "A strategy memo, not a project I ran. The 20–30% AOG figure is from other carriers' published systems, not from my work.",
      featured: true,
      theme: "Strategy"
    },
    {
      icon: "essay-tiktok",
      title: "Why TikTok's onboarding keeps users hooked",
      date: "25 Nov 2025",
      href: "https://medium.com/@bhavaanikamesh/1-product-teardown-why-tiktoks-onboarding-keeps-users-hooked-0476e35228c1",
      take: "They show the video before they ask who you are. I would measure signup, completion, and whether the optional account ever gets created.",
      featured: true,
      theme: "Teardowns"
    },
    {
      icon: "essay-notion",
      title: "My first MVP: a student workflow in Notion",
      date: "30 Nov 2025",
      href: "https://medium.com/@bhavaanikamesh/my-first-mvp-building-a-student-workflow-in-notion-a1bc759f62aa",
      take: "Tasks, notes, and a study schedule, built to fix my own scattered semester. A reminder that an MVP can be a database.",
      featured: false,
      theme: "Making"
    },
    {
      icon: "writing",
      title: "Why I'm starting a teardown and MVP blog",
      date: "25 Nov 2025",
      href: "https://medium.com/@bhavaanikamesh/why-im-starting-a-product-teardown-mvp-build-blog-79e0eb3effb6",
      take: "The assignment I gave myself: one teardown or one small build, in public, so the thinking has to survive a reader.",
      featured: false,
      theme: "Notes"
    },
    {
      icon: "slip",
      title: "Bridging code and strategy",
      date: "18 Dec 2025",
      href: "https://medium.com/@bhavaanikamesh/bridging-code-and-strategy-why-i-built-a-new-digital-home-3830a273d27b",
      take: "An earlier portfolio, in React. I called my Honeywell title SDE-1 in that essay. LinkedIn and my resumes say software engineering intern, then associate product manager. Trust the later record.",
      featured: false,
      theme: "Notes"
    }
  ],
  skills: [
    {
      icon: "sk-product",
      name: "Product",
      items: [
        ["Problem framing", "lg"],
        ["PRDs and scope", "md"],
        ["Success metrics", "lg"],
        ["Prioritization", "md"],
        ["Experiment design", "md"],
        ["Stakeholder alignment", "md"],
        ["Roadmaps", "sm"],
        ["Agile delivery", "sm"],
        ["Teardowns", "md"]
      ]
    },
    {
      icon: "sk-research",
      name: "Research",
      items: [
        ["Evaluation design", "lg"],
        ["Error analysis", "lg"],
        ["Human-in-the-loop", "lg"],
        ["Ablations and baselines", "md"],
        ["Forecast staging", "md"],
        ["Calibration", "sm"],
        ["Literature mapping", "sm"]
      ]
    },
    {
      icon: "sk-technical",
      name: "Technical",
      items: [
        ["Python", "lg"],
        ["SQL", "lg"],
        ["RAG and agents", "lg"],
        ["Classical ML", "md"],
        ["LangGraph", "md"],
        ["FastAPI", "md"],
        ["XGBoost", "md"],
        ["Neo4j", "md"],
        ["Docker", "sm"],
        ["TypeScript", "sm"],
        ["OR-Tools", "sm"]
      ]
    },
    {
      icon: "sk-tools",
      name: "Tools",
      items: [
        ["Streamlit", "md"],
        ["DuckDB", "sm"],
        ["Qdrant", "sm"],
        ["Snowflake", "sm"],
        ["BigQuery", "sm"],
        ["watsonx", "md"],
        ["IBM Granite", "sm"],
        ["Power Platform", "sm"],
        ["Ollama", "sm"],
        ["GitHub Actions", "sm"],
        ["HTML prototypes", "sm"]
      ]
    }
  ],
  education: [
    {
      school: "California State University, Long Beach",
      degree: "M.S., Information Systems, GPA 3.5",
      when: "Aug 2025 – May 2027",
      detail: "Long Beach, California. GitHub and my October resume say May 2027. LinkedIn says June 2027.",
      note: ""
    },
    {
      school: "GSSS Institute of Engineering and Technology for Women, Mysuru",
      degree: "B.E., Computer Science",
      when: "2020 – 2024",
      detail: "Affiliated to Visvesvaraya Technological University. Grade on LinkedIn: 9.2 / 10. The September resume converts this to 3.7.",
      note: ""
    },
    {
      school: "Aspire Institute",
      degree: "Aspire Leaders Program, Cohort 4",
      when: "Oct 2026 – present",
      detail: "A leadership program whose curriculum was designed by faculty from Harvard, MIT, LSE, and Oxford. The institute is an independent nonprofit founded by Harvard Business School professors. I am a participant, not a student of those universities.",
      note: ""
    }
  ],
  coursework: [
    "Computer networking",
    "Data structures and algorithms",
    "Operating systems",
    "Web technology",
    "Differential calculus",
    "Linear algebra and discrete mathematics"
  ],
  activities: [
    "Second prize, intra-collegiate technical quiz.",
    "Sponsorship committee for the college fest, and later coordinator. Raised about 65k for Geethayaana.",
    "Selected into round one of MANTHAN, a business-plan presentation run by the Federation of Karnataka Chambers of Commerce. Participation, not a win."
  ],
  honors: [
    { icon: "awards", title: "1st place, EDRAY port-logistics challenge", detail: "10 teams, 2026. Import-arrival forecast." },
    { icon: "awards", title: "Aspire Leaders Program, Cohort 4", detail: "Selected, 2026." },
    { icon: "awards", title: "Second prize, technical quiz", detail: "Intra-collegiate, GSSS Institute." },
    { icon: "ieee", title: "IEEE Women in Engineering student chair", detail: "2022, Mysuru student branch." }
  ],
  certs: [
    "Claude Academy, Claude 101 — Anthropic, Oct 2026",
    "Make Agentic AI Work for You — IBM, Sep 2026",
    "Enterprise Design Thinking Practitioner — IBM, Aug 2026",
    "Privacy and Security in Online Social Media — NPTEL",
    "Understanding Incubation and Entrepreneurship — NPTEL",
    "Crash Course on Python — Google, Nov 2022",
    "RuPay On-the-Go Designathon, participation — Unstop, Nov 2022"
  ],
  quote: {
    text: "Her style is high commitment, results oriented, focusing on the positives rather than the negatives. She is an excellent team player and would definitely be a key asset to any team she works in.",
    by: "M. Lohith Ajay, Cybersecurity Advisor at Dell Technologies, who mentored me on the chatbot. November 2, 2023."
  },
  applying: {
    product: "Associate product manager roles where the engineer in the room and the user with the problem are both real, and where I am allowed to ask what the model is not permitted to do.",
    research: "A PhD on human and AI collaboration that works out well for the person. I want to study the trust factor: when a model and a human share a task, what makes the collaboration a success, and what makes the deal still a good one for the human after they can see the work. The wildfire evacuation desk is the project I would take into that research. The model explains and drafts. A person approves every dispatch."
  },
  recommendationNote: "One public recommendation, from the Dell internship. I have not edited his wording, including \"results oriented,\" which is his phrase and not one I would use about myself."
};
