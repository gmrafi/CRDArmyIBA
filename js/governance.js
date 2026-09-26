/**
 * Centre for Research and Development (CRD)
 * Army Institute of Business Administration (AIBA), Sylhet
 * Official Institutional Governance Hierarchy
 */

const CRD_GOVERNANCE = [
    {
        tier: 1,
        tierTitle: "Director & Chief Patron",
        role: "Director, AIBA Sylhet & Chief Patron, CRD",
        name: "Brig Gen Md Abdul Hye, psc, G+ (LPR)",
        affiliation: "Director, Army Institute of Business Administration (AIBA), Sylhet",
        organization: "Jalalabad Cantonment, Sylhet – 3104",
        image: "photos/team/director.jpeg",
        isInstitutionalLogo: true,
        badges: ["Director, AIBA Sylhet", "Chief Patron, CRD"],
        bio: "Providing institutional leadership, strategic patronship, and policy direction for academic research and scholarly development at Army IBA Sylhet."
    },
    {
        tier: 2,
        tierTitle: "Chief Advisor",
        role: "Chief Advisor, Centre for Research and Development (CRD)",
        name: "Dr. Munshi Naser Ibne Afzal",
        affiliation: "Professor, Department of Economics, Shahjalal University of Science and Technology (SUST), Sylhet",
        organization: "SUST & AIBA Sylhet",
        icon: "graduation-cap",
        badges: ["Chief Advisor", "Professor of Economics (SUST)"],
        bio: "Providing academic mentorship, research strategy, econometric advisory, and guiding peer-reviewed scholarly publications."
    },
    {
        tier: 3,
        tierTitle: "Acting Head, CRD",
        role: "Acting Head, Centre for Research and Development (CRD)",
        name: "Md. Ahsanul Islam",
        affiliation: "Lecturer of Statistics, Army Institute of Business Administration (AIBA), Sylhet",
        organization: "Army IBA Sylhet",
        icon: "briefcase",
        badges: ["Acting Head, CRD", "Lecturer of Statistics"],
        bio: "Coordinating research activities, academic workshops, editorial administration of Jalalabad Papers, and institutional research projects."
    },
    {
        tier: 4,
        tierTitle: "Systems Coordination & Research Support",
        role: "Research Assistant (RA) & Systems Coordinator",
        name: "Md Golam Mubasshir Rafi",
        affiliation: "Army Institute of Business Administration (AIBA), Sylhet",
        organization: "Systems Coordinator, Centre for Research and Development (CRD) & Jalalabad Papers",
        image: "photos/team/rsz_rafi_img_01_1.jpg",
        badges: ["Research Assistant (RA), AIBA Sylhet", "Systems Coordinator, CRD & Jalalabad Papers"],
        bio: "Research Assistant at Army Institute of Business Administration (AIBA), Sylhet. Managing digital research platforms, journal publication workflows, and empirical data coordination."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CRD_GOVERNANCE };
}
