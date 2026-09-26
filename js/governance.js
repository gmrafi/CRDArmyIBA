/**
 * Centre for Research and Development (CRD)
 * Army Institute of Business Administration (AIBA), Sylhet
 * Official Institutional Governance Hierarchy
 */

const CRD_GOVERNANCE = [
    {
        tier: 1,
        tierTitle: "Chief Patron & Executive Leadership",
        role: "Chief Patron & Institutional Leadership",
        name: "Director",
        affiliation: "Army Institute of Business Administration (AIBA), Sylhet",
        organization: "AIBA Sylhet Cantonment",
        image: "aibalogo.jpg",
        isInstitutionalLogo: true,
        badges: ["Institutional Patron", "AIBA Sylhet Head"],
        bio: "Providing supreme executive direction, policy stewardship, and institutional patronship for academic and empirical research excellence at Army IBA Sylhet."
    },
    {
        tier: 2,
        tierTitle: "Strategic Academic Advisor",
        role: "Advisor, Centre for Research and Development (CRD)",
        name: "Prof. Dr. Munsi Naser Ibn Afzal",
        affiliation: "Professor, Department of Economics, Shahjalal University of Science & Technology (SUST)",
        organization: "SUST & AIBA Sylhet Advisory",
        icon: "graduation-cap",
        badges: ["Senior Academic Advisor", "PhD in Economics", "Econometrics Expert"],
        bio: "Steering international scholarly collaborations, high-impact journal publications, econometric modeling, and multidisciplinary research methodologies."
    },
    {
        tier: 3,
        tierTitle: "Acting Head / Academic Coordinator",
        role: "Acting Head, Centre for Research and Development (CRD)",
        name: "Md Ahsanul Islam (Himel)",
        affiliation: "Assistant Professor, Army Institute of Business Administration (AIBA), Sylhet",
        organization: "Army IBA Sylhet",
        icon: "briefcase",
        badges: ["Academic Coordinator", "Assistant Professor", "Managing Editor"],
        bio: "Leading day-to-day academic coordination, journal editorial boards, faculty research grants, and scholarly conferences at CRD."
    },
    {
        tier: 4,
        tierTitle: "Research & Systems Coordination",
        role: "Research Assistant & Systems Technical Lead",
        name: "Md Golam Mubasshir Rafi",
        affiliation: "Centre for Research and Development (CRD), Army IBA Sylhet",
        organization: "AIBA Sylhet",
        image: "photos/team/rsz_rafi_img_01_1.jpg",
        badges: ["Research Assistant", "Systems Technical Lead", "Data Analytics"],
        bio: "Managing institutional digital research infrastructure, computational analytics, research dissemination portals, and empirical research assistance."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CRD_GOVERNANCE };
}
