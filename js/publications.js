/**
 * Centre for Research and Development (CRD)
 * Army Institute of Business Administration (AIBA), Sylhet
 * Journal Registry & Editorial Board Information
 */

const JALALABAD_PAPERS_INFO = {
    title: "Jalalabad Papers",
    subtitle: "A Multidisciplinary Double-Blind Peer-Reviewed Journal",
    doiPrefix: "10.68017",
    publisher: "Centre for Research and Development (CRD), Army Institute of Business Administration (AIBA), Sylhet, Bangladesh",
    motto: "Advancing Knowledge Through Research & Collaboration",
    portal: "https://journal.aibasylhet.edu.bd/jalalabadpapers",
    submissionEmail: "editor.journal@aibasylhet.edu.bd",
    editorialEmail: "crd@aibasylhet.edu.bd",
    altEmail: "crd.aibasylhet@gmail.com",
    whatsapp: "+8801769-176066",
    address: "Jalalabad Cantonment, Sylhet – 3104, Bangladesh",
    frequency: "Bi-Annual Peer-Reviewed",
    currentCall: "Vol. 4, Issue 1, 2026",
    
    advisoryBoard: [
        {
            role: "Chief Advisor",
            name: "Dr. Munshi Naser Ibne Afzal",
            title: "Professor, Department of Economics, Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh",
            designation: "Chief Advisor, Centre for Research and Development (CRD), Army IBA, Sylhet"
        }
    ],

    editorialBoard: [
        {
            name: "Dr. Shamim Ahmad Siddiqui",
            affiliation: "Temple University, Philadelphia, Pennsylvania, United States",
            note: "Former Professor, Hamdan Bin Mohammed Smart University, Dubai, UAE"
        },
        {
            name: "Prof. Dr. Mohammad Ashraful Ferdous Chowdhury",
            affiliation: "Professor, Department of Business Administration, Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh"
        },
        {
            name: "Prof. Datuk Dr. Kasim Hj. Mansor",
            affiliation: "Vice-Chancellor, Universiti Malaysia Sabah (UMS), Kota Kinabalu, Sabah, Malaysia"
        },
        {
            name: "Dr. Badrun Nessa Ahmed",
            affiliation: "Senior Research Fellow, Bangladesh Institute of Development Studies (BIDS), Dhaka, Bangladesh"
        },
        {
            name: "Dr. Tasmina Chowdhury Tania",
            affiliation: "Professor, Department of Business Administration, Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh"
        }
    ],

    editorialCommittee: [
        {
            role: "Assistant Editor",
            name: "Chinmoy Das Gupta",
            affiliation: "Assistant Professor, Army Institute of Business Administration (AIBA), Sylhet, Bangladesh"
        },
        {
            role: "Assistant Editor",
            name: "Md. Ahsanul Islam",
            affiliation: "Acting Head, Centre for Research and Development (CRD) & Lecturer of Statistics, Army Institute of Business Administration (AIBA), Sylhet, Bangladesh"
        },
        {
            role: "Assistant Editor",
            name: "Dr. Umme Humayara Manni",
            affiliation: "Associate Professor, Department of Business Administration, Metropolitan University, Sylhet, Bangladesh"
        },
        {
            role: "Committee Member",
            name: "Mohammad Tooneer",
            affiliation: "Lecturer of Supply Chain Management; Member, Research & Publication Unit, CRD, Army IBA Sylhet"
        },
        {
            role: "Committee Member",
            name: "Syed Wasiftazwar",
            affiliation: "Lecturer of Management Information Systems (MIS); Member, Communications & Outreach Unit, CRD, Army IBA Sylhet"
        }
    ],

    technicalProduction: {
        role: "Systems Coordinator",
        name: "Md Golam Mubasshir Rafi",
        affiliation: "Research Assistant (RA), Army Institute of Business Administration (AIBA), Sylhet",
        responsibilities: "Systems Coordinator, Centre for Research and Development (CRD) & Jalalabad Papers"
    }
};

const CRD_PUBLICATIONS = [
    {
        id: "icctass-springer-solar-2026",
        title: "Assessing the Socio-Economic Impact and Sustainability of Microfinance-Enabled Solar Home Systems in Rural Bangladesh: A Mixed-Method Study (2019-2025)",
        category: "journal",
        type: "Published Journal Article",
        badges: ["Published Journal Article", "Open Access", "DOI Live"],
        authors: [
            { name: "Fariha Fairouz Proma" },
            { name: "Md Golam Mubasshir Rafi", orcid: "0009-0007-4015-8354", isCorresponding: true },
            { name: "Nowshin Noweer Nisa" }
        ],
        correspondingAuthor: "Md Golam Mubasshir Rafi",
        venue: "International Conference on Challenges and Trends in Arts and Social Sciences (ICCTASS 2025)",
        publisher: "Atlantis Press (Springer Nature), ASSEHR Series",
        date: "May 30, 2026",
        year: 2026,
        doi: "10.2991/978-2-38476-581-2_4",
        doiUrl: "https://doi.org/10.2991/978-2-38476-581-2_4",
        pdfUrl: "https://www.atlantis-press.com/article/126024684.pdf",
        publicationPage: "https://www.atlantis-press.com/proceedings/icctass-25/126024684",
        description: "A comprehensive mixed-method study evaluating the socio-economic impact, household livelihood transformation, and operational sustainability of microfinance-supported Solar Home Systems (SHS) across rural communities in Bangladesh."
    },
    {
        id: "icctass-aiub-shs-2025",
        title: "Microfinance-Enabled Solar Home Systems in Rural Bangladesh: Assessing Socio-Economic Impact for Sustainable Energy Policy",
        category: "conference",
        type: "Presented Conference Paper",
        badges: ["Presented Conference Paper", "Sustainability"],
        authors: [
            { name: "Fariha Fairuz Proma", orcid: "0009-0007-8265-775X" },
            { name: "Md Golam Mubasshir Rafi", orcid: "0009-0007-4015-8354", isCorresponding: true }
        ],
        correspondingAuthor: "Md Golam Mubasshir Rafi",
        venue: "International Conference on Challenges and Trends in Arts and Social Sciences (ICCTASS 2025)",
        organizer: "American International University-Bangladesh (AIUB), Dhaka",
        date: "December 11, 2025",
        year: 2025,
        proceedingsUrl: "https://icctass.aiub.edu/view/proceedings/icctass2025.html",
        scheduleUrl: "https://icctass.aiub.edu/view/schedules/online-schedule.html",
        description: "Empirical evaluation of microfinance-linked solar home systems deployment across off-grid communities, highlighting policy insights for national sustainable energy transition."
    },
    {
        id: "icflew-brac-mfs-2025",
        title: "Exploring Mobile Financial Services (MFS) Adoption and Basic Financial Literacy Among Market Merchants in Sylhet",
        category: "conference",
        type: "Presented Conference Paper",
        badges: ["Presented Conference Paper", "Financial Literacy"],
        authors: [
            { name: "Md Golam Mubasshir Rafi", orcid: "0009-0007-4015-8354", isCorresponding: true },
            { name: "Israt Zarin Ruponty", orcid: "0009-0007-4844-1154" }
        ],
        correspondingAuthor: "Md Golam Mubasshir Rafi",
        venue: "International Conference on Financial Literacy and Economic Wellbeing (ICFLEW) 2025",
        organizer: "BRAC University, Dhaka, Bangladesh",
        date: "June 26, 2025",
        year: 2025,
        proceedingsPdf: "https://icflew.bracu.ac.bd/e-Proceedings_ICFLEW2025_Final.pdf",
        scheduleUrl: "https://icflew.bracu.ac.bd/schedule.html",
        researchGateUrl: "https://www.researchgate.net/publication/393061631_Exploring_Mobile_Financial_Services_MFS_Adoption_and_Basic_Financial_Literacy_among_Market_Merchants_in_Sylhet",
        description: "A primary empirical survey exploring digital payment adoption hurdles, merchant transaction patterns, and foundational financial literacy levels across retail markets in Sylhet."
    },
    {
        id: "ijsmr-repo-rate-inflation-2025",
        title: "Examining the Role of Repo Rate in Controlling Inflation: Analyzing the Dynamics of the Proportional Relationship",
        category: "journal",
        type: "Published Journal Article",
        badges: ["Published Journal Article", "Open Access"],
        authors: [
            { name: "Mashrura Meshkat Punno", orcid: "0009-0002-1022-7324" },
            { name: "Md Golam Mubasshir Rafi", orcid: "0009-0007-4015-8354", isCorresponding: true }
        ],
        correspondingAuthor: "Md Golam Mubasshir Rafi",
        journal: "International Journal of Sustainability and Multidisciplinary Research (IJSMR)",
        date: "February 21, 2025",
        year: 2025,
        description: "An analytical inquiry evaluating central bank repo rate adjustments as monetary policy instruments and testing their proportional relationship and lag dynamics in managing inflation rates."
    },
    {
        id: "crd-swp-employability-2025",
        title: "Graduate Employability and Industrial Skill Gaps in Sylhet Metropolitan Area",
        category: "working-paper",
        type: "Student Working Paper Series",
        badges: ["Student Working Paper Series", "CRD Working Paper No. 04/2025"],
        authors: [
            { name: "CRD Student Research Group (AIBA Sylhet)" },
            { name: "Md Golam Mubasshir Rafi", orcid: "0009-0007-4015-8354", isCorresponding: true }
        ],
        correspondingAuthor: "Md Golam Mubasshir Rafi",
        series: "CRD Student Working Paper Series, No. 04/2025",
        date: "2025",
        year: 2025,
        doi: "10.68017/wp.2025.04",
        description: "A primary empirical survey evaluating analytical, financial, and digital skill requirements among corporate employers in banking, logistics, and telecom sectors across Sylhet to bridge the academia-industry gap."
    },
    {
        id: "crd-swp-green-finance-2025",
        title: "Green Finance and Climate Risk: Challenges and Opportunities for Sustainable Growth in Bangladesh",
        category: "working-paper",
        type: "Student Working Paper Series",
        badges: ["Student Working Paper Series", "CRD Working Paper No. 02/2025"],
        authors: [
            { name: "S. M. Mosaddad Ali (AIBA Sylhet)" },
            { name: "Sabikunnahar Mahi (AIBA Sylhet)" }
        ],
        series: "CRD Student Working Paper Series, No. 02/2025",
        date: "2025",
        year: 2025,
        doi: "10.68017/wp.2025.02",
        description: "Analyzing commercial bank green credit allocations, central bank refinancing directives, and climate vulnerability management guidelines in flood-prone regional production clusters."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JALALABAD_PAPERS_INFO, CRD_PUBLICATIONS };
}
