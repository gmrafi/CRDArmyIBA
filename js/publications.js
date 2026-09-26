/**
 * Centre for Research and Development (CRD)
 * Army Institute of Business Administration (AIBA), Sylhet
 * Institutional Journals and Research Publications Registry
 */

const CRD_JOURNALS = [
    {
        id: "jalalabad-papers",
        title: "Jalalabad Papers",
        subtitle: "Official Institutional Journal of Army IBA Sylhet",
        volume: "Vol. 4, Issue 1, 2026",
        issn: "2708-5422",
        frequency: "Bi-Annual Peer-Reviewed",
        scope: "Multidisciplinary Business, Economics, Applied Technology, and Strategic Management",
        status: "Call for Papers Open",
        description: "The premier flagship academic journal of Army Institute of Business Administration Sylhet, publishing rigorous empirical investigations and theoretical contributions.",
        link: "#submit",
        type: "Flagship Institutional Journal"
    },
    {
        id: "ijsmr",
        title: "International Journal of Sustainability & Multidisciplinary Research (IJSMR)",
        subtitle: "Affiliated Global Research Journal",
        volume: "Indexed & Peer-Reviewed",
        issn: "2958-3756",
        frequency: "Quarterly",
        scope: "Sustainable Finance, ESG, Circular Economy, and Sustainable Enterprise Development",
        status: "Accepting Submissions",
        description: "An international scholarly avenue for high-impact research on sustainability, environmental governance, and socio-economic transformation.",
        link: "#submit",
        type: "International Indexed Journal"
    },
    {
        id: "crd-working-papers",
        title: "CRD Working Paper Series",
        subtitle: "Institutional Pre-Print and Faculty-Mentored Research Repository",
        volume: "Series 2026",
        issn: "Institutional Monograph",
        frequency: "Continuous Dissemination",
        scope: "Pre-print findings, exploratory empirical surveys, and policy advisory briefs",
        status: "Open Submissions",
        description: "Fostering early academic debate and scholarly dissemination for AIBA Sylhet faculty scholars and mentored graduate researchers.",
        link: "#submit",
        type: "Working Paper Series"
    }
];

const CRD_PUBLICATIONS = [
    {
        id: "bkash-nano-loans-2025",
        title: "Artificial Intelligence in Microfinance: A Study on bKash Nano Loans Adoption in Sylhet Region",
        category: "Journal Article",
        domain: "FinTech & AI",
        authors: "Md Golam Mubasshir Rafi, Md Ahsanul Islam (Himel)",
        journal: "International Journal of Sustainability and Multidisciplinary Research (IJSMR)",
        year: 2025,
        volume: "Vol. 3, Issue 4, pp. 112-128",
        doi: "10.5281/zenodo.10892341",
        description: "An empirical investigation examining machine learning-driven credit scoring algorithms and borrower repayment behaviors in mobile nano-loan facilities across northeastern Bangladesh.",
        badges: ["Empirical Survey", "FinTech", "Peer-Reviewed"],
        link: "https://doi.org/10.5281/zenodo.10892341"
    },
    {
        id: "solar-home-systems-2025",
        title: "Adoption and Impact of Solar Home Systems (SHS) on Rural Livelihoods in Sylhet Division",
        category: "Journal Article",
        domain: "Sustainable Energy",
        authors: "CRD Research Group, Prof. Dr. Munsi Naser Ibn Afzal",
        journal: "Jalalabad Papers — AIBA Sylhet",
        year: 2025,
        volume: "Vol. 3, Issue 2, pp. 45-63",
        doi: "10.5281/zenodo.10984321",
        description: "Socio-economic impact assessment of off-grid photovoltaic adoption on micro-enterprise productivity, household welfare, and carbon offset in off-grid rural communities.",
        badges: ["Sustainability", "Rural Economy", "Jalalabad Papers"],
        link: "https://doi.org/10.5281/zenodo.10984321"
    },
    {
        id: "mfs-adoption-dynamics-2025",
        title: "Consumer Adoption Dynamics of Mobile Financial Services: Structural Equation Modeling Approach",
        category: "Journal Article",
        domain: "Digital Finance",
        authors: "Research Fellows, Under CRD Supervision",
        journal: "International Journal of Sustainability and Multidisciplinary Research (IJSMR)",
        year: 2025,
        volume: "Vol. 3, Issue 3, pp. 88-104",
        doi: "10.5281/zenodo.10765432",
        description: "Testing extended Unified Theory of Acceptance and Use of Technology (UTAUT) models using partial least squares structural equation modeling (PLS-SEM) across 450 active retail consumers.",
        badges: ["PLS-SEM", "Consumer Behavior", "Peer-Reviewed"],
        link: "https://doi.org/10.5281/zenodo.10765432"
    },
    {
        id: "green-finance-climate-2025",
        title: "Green Finance and Climate Risk: Challenges and Opportunities for Sustainable Growth in Bangladesh",
        category: "Conference Paper",
        domain: "Green Finance",
        authors: "Faculty & Student Research Synergy, AIBA Sylhet",
        journal: "Proceedings of LURS 2nd International Student Research Conference",
        year: 2025,
        volume: "Conference Proceedings 2025",
        doi: "10.5281/zenodo.10654321",
        description: "Strategic evaluation of commercial bank green credit allocations, central bank refinancing schemes, and climate risk resilience in riverine production hubs.",
        badges: ["Climate Risk", "ESG", "Conference Paper"],
        link: "https://doi.org/10.5281/zenodo.10654321"
    },
    {
        id: "graduate-employability-2025",
        title: "Graduate Employability and Industrial Skill Gaps in Sylhet Metropolitan Area: A Cross-Sectoral Analysis",
        category: "Working Paper",
        domain: "Labor Economics",
        authors: "CRD Working Group & Faculty Mentors",
        journal: "CRD Student Working Paper Series, Army IBA Sylhet",
        year: 2025,
        volume: "Working Paper No. 04/2025",
        doi: "10.5281/zenodo.10543210",
        description: "A quantitative gap analysis evaluating BBA curriculum alignment with corporate employer expectations across banking, telecom, and logistics sectors in Sylhet.",
        badges: ["Higher Education", "Labor Market", "Working Paper"],
        link: "https://doi.org/10.5281/zenodo.10543210"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CRD_JOURNALS, CRD_PUBLICATIONS };
}
