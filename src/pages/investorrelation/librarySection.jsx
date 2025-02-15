import React, { useEffect, useState } from 'react'

// Assets
import './style.css';
import Images from '../../assets/Images';
import Icons from '../../assets/Icons';
import ReverseProxy from '../../config/reverseproxy'


const LibrarySection = () => {

    const [Categories, setCategories] =useState([
        {
            id: 'policies_codes',
            label: 'Policies & Codes',
            icon: Icons.library.policy
        },
        {
            id: 'trading',
            label: 'Trading window closure',
            icon: Icons.library.trading
        },
        {
            id: 'sdd',
            label: 'Structured Digital Database(SDD)',
            icon: Icons.library.sdd
        },
        {
            id: 'shareholding',
            label: 'Shareholding Pattern',
            icon: Icons.library.shareholding
        },
        {
            id: 'gov_report',
            label: 'Corporate Governance Reports',
            icon: Icons.library.gov_report
        },
        {
            id: 'investor_guide',
            label: 'Investor Grievance Report',
            icon: Icons.library.investor_guide
        },
        {
            id: 'share_capital',
            label: 'Share Capital Reconciliation Report',
            icon: Icons.library.share_capital
        },

        {
            id: 'finance_statement',
            label: 'Financial statements',
            icon: Icons.library.finance_statement
        },
        {
            id: 'party_disclosures',
            label: 'Related Party Disclosures',
            icon: Icons.library.annual_report
        },
        {
            id: 'annual_report',
            label: 'Annual Reports',
            icon: Icons.library.annual_report
        },
        {
            id: 'business_update',
            label: 'Business Updates',
            icon: Icons.library.business_update
        },
        {
            id: 'newspaper',
            label: 'Newspaper Publications',
            icon: Icons.library.newspaper
        },
        {
            id: 'annual_disclosure',
            label: 'Annual Disclosures',
            icon: Icons.library.annual_disclosure
        },
        {
            id: 'board_meetings',
            label: 'Board Meeting',
            icon: Icons.library.board_meetings
        },
        {
            id: 'share_holder_meeting',
            label: 'Share Holders Meeting',
            icon: Icons.library.share_holder_meeting
        },
        {
            id: 'postal',
            label: 'Postal Ballot',
            icon: Icons.library.postal
        },
        {
            id: 'demat',
            label: 'Demat',
            icon: Icons.library.demat
        },
        {
            id: 'loss_issue',
            label: 'Loss /issue of share certificates',
            icon: Icons.library.loss
        },
        {
            id: 'announcement',
            label: 'Corp Announcements',
            icon: Icons.library.announcement
        },
        {
            id: 'miscellaneous',
            label: 'Miscellaneous',
            icon: Icons.library.miscellaneous
        },
    ])

    const [YearsList, setYearsList]= useState([
        '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025'
    ])
    
    const [RecordsOrginal, setRecordsOrginal] = useState([
        {
            id: '1',
            label: 'Board Divertsity Policy',
            link: 'https://drive.google.com/file/d/1msberRBewkSWjXK7gbFf1911r7R8vvvg/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Code for Prevention of Insider Trading in the Securities',
            link: 'https://drive.google.com/file/d/1FXWgxkoVR4BomqFPdNxnGbiN-xXP2149/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Code of Conduct_Directors, Senior Management & Independent Directors',
            link: 'https://drive.google.com/file/d/1qRtxYZNyTQG9wVelvPkvPCSoUX-ruc9P/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Composition of Board of Directors and Committees',
            link: 'https://drive.google.com/file/d/13RNaPGpzhbTaQYBFDRUAp-vw0HzciOsJ/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Criteria for making Payment to Non-Executive Directors',
            link: 'https://drive.google.com/file/d/1jhov6sttUuyDlN4UG1gETxPgqegCMUbh/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Familiarization Programme for Independent Directors_2023-24',
            link: 'https://drive.google.com/file/d/13H_ZV1FBndrJSiK0NeZdH_bP8JNBYWC1/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Nomination and Remuneration Policy',
            link: 'https://drive.google.com/file/d/1raAjzU5dsypCWUjlp6USdLMr8hvYN03L/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Performance Evaluation Policy',
            link: 'https://drive.google.com/file/d/12EkfVZXqNkpdhl7y3NtvoIhKR2IEViUq/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Policy on determination of materiality of Events and Information',
            link: 'https://drive.google.com/file/d/1gP6HxbTPvICyTg-2CT4hqPS21NaHA2qx/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Policy on Preservation of Documents',
            link: 'https://drive.google.com/file/d/1kVValO2p0ZpvUWLYs39bipwQuPFLUdcv/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Policy on Prevention of Sexual Harassment',
            link: 'https://drive.google.com/file/d/150dhA5Ag9fSWSScNG0WNNZ7rL4pONxIX/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Policy on Related Party Transactions',
            link: 'https://drive.google.com/file/d/1KoVJbWvU9PX6-xVIhWCj9t8IywLpXONK/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Risk Management Policy',
            link: 'https://drive.google.com/file/d/1fl7xdgzRdLw_Ui0n7FpfgseoxB2WVDZW/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Succession Plan for Board and Senior Management',
            link: 'https://drive.google.com/file/d/1fnBBai7AVfVFfH6HYGFMPAAFdM6MHbIk/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Terms and conditions for appointment of Independent Directors',
            link: 'https://drive.google.com/file/d/1uV22eLBF2commiRr6S6uhTWteo1CvCKs/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: 'Vigil Mechanism or Whistle Blower Policy',
            link: 'https://drive.google.com/file/d/1QjhtYbg8v4VTPH_or6nDFea40VeDsB7L/view?usp=drive_link',
            category_id: 'policies_codes',
            year: '#'
        },
        {
            id: '1',
            label: '1_Trading window closure Quarter ended 30.06.2020',
            link: 'https://drive.google.com/file/d/1iagb3ZIobcZK38GM0ovxIMd6N3T4PWzZ/view?usp=drive_link',
            category_id: 'trading',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Trading window closure Quarter ended 30.09.2020',
            link: 'https://drive.google.com/file/d/14VzF0a5dvtOI1_LPQ0J3tXRPbuvuaR7m/view?usp=drive_link',
            category_id: 'trading',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Trading window closure Quarter ended 31.12.2020',
            link: 'https://drive.google.com/file/d/1XmgFu9yWEjrtoTchzTW1jMociTq9keTD/view?usp=drive_link',
            category_id: 'trading',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Trading window closure Quarter ended 31.03.2021',
            link: 'https://drive.google.com/file/d/1ygUkWfnGJbP9o8LbGFcv9YYb5F0aEDVr/view?usp=drive_link',
            category_id: 'trading',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Trading window closure Quarter ended 30.06.2021',
            link: 'https://drive.google.com/file/d/1R39ZT08s5vDnXSC0EBZo-2l-y6KEQlxb/view?usp=drive_link',
            category_id: 'trading',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Trading window closure Quarter ended 30.09.2021',
            link: 'https://drive.google.com/file/d/15Wd9meLsU8Rm4Pu287jZVCh4vsWcN_5R/view?usp=drive_link',
            category_id: 'trading',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Trading window closure Quarter ended 31.12.2021',
            link: 'https://drive.google.com/file/d/1dD6j8rQAN3GDyDgcVAcifIc4ciBlupxp/view?usp=drive_link',
            category_id: 'trading',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Trading window closure Quarter ended 31.03.2022',
            link: 'https://drive.google.com/file/d/1OACLcrIlOPlPRBEF74PUWf2umSyt_Bbz/view?usp=drive_link',
            category_id: 'trading',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Trading window closure Quarter ended 30.06.2022',
            link: 'https://drive.google.com/file/d/1xbhCbX2tbgYc_3mmZRc4wK0_-QlJl-g4/view?usp=drive_link',
            category_id: 'trading',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Trading window closure Quarter ended 30.09.2022',
            link: 'https://drive.google.com/file/d/1-z_X4JzVd3Ay1xB6aos0v2FDpySevQbM/view?usp=drive_link',
            category_id: 'trading',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Trading window closure Quarter ended 31.12.2022',
            link: 'https://drive.google.com/file/d/1yWGPI1Ef3DM77-1kEVa3Bn8vXOvfFhVV/view?usp=drive_link',
            category_id: 'trading',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Trading window closure Quarter ended 31.03.2023',
            link: 'https://drive.google.com/file/d/1Cvy5ctvmKMDX68OJZ7qq7-RvMIRLHOgc/view?usp=drive_link',
            category_id: 'trading',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Trading window closure Quarter ended 30.06.2023',
            link: 'https://drive.google.com/file/d/1gBI9u_ipv9AlJgpez1BdximGM_dFBPSk/view?usp=drive_link',
            category_id: 'trading',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Trading window closure Quarter ended 30.09.2023',
            link: 'https://drive.google.com/file/d/1pCDsR6JFsYySwDnMFFfQWCnQRBdyFdh0/view?usp=drive_link',
            category_id: 'trading',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Trading window closure Quarter ended 31.12.2023',
            link: 'https://drive.google.com/file/d/1mh35CFwDF8mrCpk2zYCkhZLpdP2FiVnZ/view?usp=drive_link',
            category_id: 'trading',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Trading window closure Quarter ended 31.03.2024',
            link: 'https://drive.google.com/file/d/1DkmoOLlcKSUeJungaIXDeCDx6gNL4W59/view?usp=drive_link',
            category_id: 'trading',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Trading window closure Quarter ended 30.06.2024',
            link: 'https://drive.google.com/file/d/1J8uQ0ReSixnJLodHkt1wYhmijXlVS17e/view?usp=drive_link',
            category_id: 'trading',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Trading window closure Quarter ended 30.09.2024',
            link: 'https://drive.google.com/file/d/1ysjHY5g2sybUXVr8Bp5_FXkfW0IjGTDA/view?usp=drive_link',
            category_id: 'trading',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_SDD Compliance Certificate_30.06.2022',
            link: 'https://drive.google.com/file/d/1lhoORptwk-rHf1H5O_75hHdoD8fAx14D/view?usp=drive_link',
            category_id: 'sdd',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_SDD Compliance Certificate_30.09.2022',
            link: 'https://drive.google.com/file/d/13J73z-0vIVevRXt1FOrXxxbKIjmAd7ou/view?usp=drive_link',
            category_id: 'sdd',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_SDD Compliance Certificate_31.12.2022',
            link: 'https://drive.google.com/file/d/1ZFWOCLwu6yaBgsSX6bgLCwDwwjwbQ2-N/view?usp=drive_link',
            category_id: 'sdd',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_SDD Compliance Certificate_31.03.2023',
            link: 'https://drive.google.com/file/d/1141tuPiIvVI-byqQ9NceNmYeezkTY3a2/view?usp=drive_link',
            category_id: 'sdd',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_SDD Compliance Certificate _30.06.2023',
            link: 'https://drive.google.com/file/d/1x9aIZDxtAlRVOVAWo4OSPUBElvJo1Gs5/view?usp=drive_link',
            category_id: 'sdd',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_SDD Compliance Certificate_30.09.2023',
            link: 'https://drive.google.com/file/d/1G1XvPc_JfAkkaiLeIg9_DyzbfZAfUqEu/view?usp=drive_link',
            category_id: 'sdd',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_SDD Compliance Certificate_31.12.2023',
            link: 'https://drive.google.com/file/d/1fsi_A_bic74Texdy34_9hiOKrAZ7fZ82/view?usp=drive_link',
            category_id: 'sdd',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_SDD Compliance Certificate_31.03.2024',
            link: 'https://drive.google.com/file/d/17dKrs57kPt-aQkyv44plyxjIEVjem73p/view?usp=drive_link',
            category_id: 'sdd',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_SDD Compliance Certificate_30.06.2024',
            link: 'https://drive.google.com/file/d/1anlmkbj519sYutRkpjmvYdhJHCSXf94L/view?usp=drive_link',
            category_id: 'sdd',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_SDD Compliance Certificate_30.09.2024',
            link: 'https://drive.google.com/file/d/12VvrTUEHeKg5rZZ50W7bXk5mpjbvR6jy/view?usp=drive_link',
            category_id: 'sdd',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2019',
            link: 'https://drive.google.com/file/d/1_cYkut3KHUtyFkrLHM81ieqNa7_c7_ni/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2019',
            link: 'https://drive.google.com/file/d/1uKFNTolxpaTKVmbu-1KfIImEDe0eLvsS/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Shareholding Pattern Quarter ended_31.12.2019',
            link: 'https://drive.google.com/file/d/1LUihvP2IlV_zT4OHyLFvVTjoVxFmGWpz/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Shareholding Pattern Quarter ended_31.03.2020',
            link: 'https://drive.google.com/file/d/1gXE74VP_hwWLmbBLceeNrRzix6JMljv-/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2020',
            link: 'https://drive.google.com/file/d/18-_mh2FwY5ZTdvKP5t05akd50RBf4hcu/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2020',
            link: 'https://drive.google.com/file/d/12No897pTjNk6SrD3hREOrX0BYqLfYCvH/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Shareholding Pattern Quarter ended_31.12.2020',
            link: 'https://drive.google.com/file/d/1jptQ7g06tJrjZVsxF_1X-MpVIn-sPwkH/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Shareholding Pattern Quarter ended_31.03.2021',
            link: 'https://drive.google.com/file/d/1jqqF8xD5r-ehAPf7LBt6qxg3GDkyNoew/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2021',
            link: 'https://drive.google.com/file/d/1x3EtOvC678WQsG76yY8vB7yK3H6R5yXC/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2021',
            link: 'https://drive.google.com/file/d/1IQFcIwIF0uTEP0HacW9qmVp__FbJaNPj/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Shareholding Pattern Quarter ended_31.12.2021',
            link: 'https://drive.google.com/file/d/1ZHW54qgxjbULyS6anYzfQqfml_a6HUPb/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Shareholding Pattern Quarter ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1H7pHh2lto2_wstGaEeAv0m2r9Wd3TUbk/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2022',
            link: 'https://drive.google.com/file/d/1w-1RtzQc-QlsMGxYDoVrLHDVePmEilmv/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2022',
            link: 'https://drive.google.com/file/d/11-G2v2PwILHHb78Lmz8zH5CZGSGBFeZ8/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Shareholding Pattern Quarter ended_31.12.2022',
            link: 'https://drive.google.com/file/d/1PIskKsURmC_-zH7GaFe9W_7J0VdvUcQo/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Shareholding Pattern Quarter ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1NI8M3uhIgnxtoNqQu41cySk1WApejMg4/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2023',
            link: 'https://drive.google.com/file/d/1J5kCd3sN33pUiiWTV6g9PrYCgWhNQSCM/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2023',
            link: 'https://drive.google.com/file/d/1Jtns36bP6hFTwaNjrSCyIuOV3s1kNTPV/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Shareholding Pattern Quarter ended_31.12.2023',
            link: 'https://drive.google.com/file/d/184cWlsSpW45OlyY3apfDYYU18O68YFgS/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Shareholding Pattern Quarter ended_31.03.2024',
            link: 'https://drive.google.com/file/d/1AMP1KSG0znVb18pwXeXLUKQkonfRpj8W/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Shareholding Pattern Quarter ended_30.06.2024',
            link: 'https://drive.google.com/file/d/1Xcqjz1vfc9mo0JePB_wMPQ7XODCQFt-o/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Shareholding Pattern Quarter ended_30.09.2024',
            link: 'https://drive.google.com/file/d/1nlve_19oruMceoC20mSRsKcXo30E1mP5/view?usp=drive_link',
            category_id: 'shareholding',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Corporate Governance Report quarter ended_30.06.2020',
            link: 'https://drive.google.com/file/d/1HpkyA_XSXpHBpXLWX47fhMKVeV0trWL0/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Corporate Governance Report quarter ended_30.09.2020',
            link: 'https://drive.google.com/file/d/1XmnJtUIv5klM9uPzosX1mjCX1id2iyuo/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Corporate Governance Report quarter ended_31.12.2020',
            link: 'https://drive.google.com/file/d/1EG8MaA6-Sr3Mv5qdNbzYFYbczbwCYRjM/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Corporate Governance Report quarter ended_31.03.2021',
            link: 'https://drive.google.com/file/d/1tOuOXUu5brR0uNa6-TI935Oelos6zmCf/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Corporate Governance Report quarter ended_31.06.2021',
            link: 'https://drive.google.com/file/d/1zJrRxyVcCqS32SzmT29okWs185Eh-qI4/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Corporate Governance Report quarter ended_30.09.2021',
            link: 'https://drive.google.com/file/d/1WVqKZJ8OZFLxNeN1SiYDCSl9TkRaIyLi/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Corporate Governance Report quarter ended_31.12.2021',
            link: 'https://drive.google.com/file/d/1NqTLfGMkAsSXUTbgPHqHbEcOnW3lKuXf/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Corporate Governance Report quarter ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1XnnFono9BcbOgAyXS303Gc_rdUksQD1B/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Corporate Governance Report quarter ended_30.06.2022',
            link: 'https://drive.google.com/file/d/1rDUtIWvnbQ88OHfhE1jwu3NxLc0qANiZ/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Corporate Governance Report quarter ended_30.09.2022',
            link: 'https://drive.google.com/file/d/1FlvsTTVNsEjcZS3B-G0na4CYgTsP-_r1/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Corporate Governance Report quarter ended_31.12.2022',
            link: 'https://drive.google.com/file/d/1WjUY9zfmTI-jZsXFBYwKDyvhyf7_vxFw/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Corporate Governance Report quarter ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1jSacRC9hZ8YI58onA_perjlhtk4lUH1o/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Corporate Governance Report quarter  ended_30.06.2023',
            link: 'https://drive.google.com/file/d/1zz0pIoHWFjk84L0C2CvZ8OuT4KCoUOO5/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Corporate Governance Report quarter  ended_30.09.2023',
            link: 'https://drive.google.com/file/d/1rB4ZPorv52RyuKQCjrulq-mwjzuH4bX3/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Corporate Governance Report quarter  ended_31.12.2023',
            link: 'https://drive.google.com/file/d/1aVnGH5M7KMEv7dyWTkKDBuknwRM41mbn/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Corporate Governance Report quarter  ended_31.03.2024',
            link: 'https://drive.google.com/file/d/1X0CY5Ly79hpZo-EnnsvsCxFZer3YFmHt/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Corporate Governance Report quarter ended_30.06.2024',
            link: 'https://drive.google.com/file/d/19Af6nGeOVIpdPJg-GbFjuAJBHxRY7FUR/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Corporate Governance Report quarter ended_30.09.2024',
            link: 'https://drive.google.com/file/d/1KdJ-k-6owO_rEKoQO5pEgXMdI_NFhl_5/view?usp=drive_link',
            category_id: 'gov_report',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Nil pending Certificate as on 30.06.2019',
            link: 'https://drive.google.com/file/d/1pCl4ZkyDcfc0JirPmzen-zG4VHbKBcXJ/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Statement of Investor Complaints for the Quarter ended 30.06.2019',
            link: 'https://drive.google.com/file/d/1Wu4hVDcromlAfRueUxupFPWRjUSBvboQ/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Nil pending Certificate as on 30.09.2019',
            link: 'https://drive.google.com/file/d/1Oxg_PPtmUTnNmklod-PZ4has_WZOW94D/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Statement of Investor Complaints for the Quarter ended 30.09.2019',
            link: 'https://drive.google.com/file/d/1XJn8gKY8yS3VRARXldMzPYEcz9G9Dj-7/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Statement of Investor Compliants for Quarter the ended 31.12.2019',
            link: 'https://drive.google.com/file/d/1pUu0hXcDcqoOMRf7n84CyJ9AiOSgY93N/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Statement of Investor Compliants for Quarter the ended 31.03.2020',
            link: 'https://drive.google.com/file/d/1Fsen5qaLSxh8bsPJELZUKEMuoUA_kb0n/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Statement of Investor Compliants for the Quarter ended 30.06.2020',
            link: 'https://drive.google.com/file/d/155RpgXjvSCA55A3KqNH54QJGEuhW3a7H/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Statement of Invester Compliants for the quarter ended 30.09.2020',
            link: 'https://drive.google.com/file/d/1oh6wYIoK_NBFwBWZpoRJlnDYd_cEhoHf/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Statement of Investor Compliants for the quarter ended 31.12.2020',
            link: 'https://drive.google.com/file/d/1_2H1vl3god0LarvHuR51fVnI9BDEQZ0S/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Nil pending Certificate as on 31.03',
            link: 'https://drive.google.com/file/d/1vtqppCe1zPCqCF4k5e-03JMrcI_7v_h7/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Statement of Investor Complaints for the Quarter ended 31.03',
            link: 'https://drive.google.com/file/d/1jYM2oaIPXKugLcskSjr5hwkLQaNfvXCf/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Nil pending Certificate as on 30.06.2021',
            link: 'https://drive.google.com/file/d/1vgGhkbGbwBkfBYJF92K1N38uDGJ-fEVN/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Statement of Investor Complaints for the Quarter ended 30.06.2021',
            link: 'https://drive.google.com/file/d/1kpWVi2Xf6qvmSUOwTzKjHQ7NCj2Ux17B/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Nil pending Certificate as on 30.09.2021',
            link: 'https://drive.google.com/file/d/1HqkE0uOWw_i15ltz6GmZms8-Tz2lX4SP/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Statement of Investor Complaints for the Quarter ended 30.09.2021',
            link: 'https://drive.google.com/file/d/1SmywySMDJa10BVKsyj7NERz6_9231kKU/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Nil pending Certificate as on 31.12.2021',
            link: 'https://drive.google.com/file/d/1MZFPrhhX95PgoInAOB7vvIZ7yzM-KtIq/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Statement of Investor Complaints for the Quarter ended 31.12.2021',
            link: 'https://drive.google.com/file/d/1KuN3apyGf_TIev9ctdDrVYfxQW1yPE0E/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Nil pending Certificate as on 31.03.2022',
            link: 'https://drive.google.com/file/d/1ZaHomHyqWDYygkHQYIhx-9XFQ33VHp1B/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Statement of Investor Complaints for the Quarter ended 31.03.2022',
            link: 'https://drive.google.com/file/d/1AMOKh2ZHcwWKWhNImOSQVXiGzzfAfpQY/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Nil pending Certificate as on 30.06.2022',
            link: 'https://drive.google.com/file/d/1aX13cVHz9fMv8AAJ-s3t0159FaZOnTsU/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Statement of Investor Complaints for the Quarter ended 30.06.2022',
            link: 'https://drive.google.com/file/d/1O01VDOfrAJV9CU8axGmu3_h3OycYjYHm/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Nil pending Certificate as on 30.09.2022',
            link: 'https://drive.google.com/file/d/1iipCwvy0PexRTvmS7p0oN4oGwCIzMavj/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Statement of Investor Complaints for the Quarter ended 30.09.2022',
            link: 'https://drive.google.com/file/d/1iipCwvy0PexRTvmS7p0oN4oGwCIzMavj/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Nil pending Certificate as on 31.12.2022',
            link: 'https://drive.google.com/file/d/1BCeD-nHhiirE1i9NZ1km5UiHOpGtFIG0/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Statement of Investor Complaints for the Quarter ended 31.12.2022',
            link: 'https://drive.google.com/file/d/1BCeD-nHhiirE1i9NZ1km5UiHOpGtFIG0/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Nil pending Certificate as on 31.03.2023',
            link: 'https://drive.google.com/file/d/1VWiA_n233fBW5utL47TsFt2jEzWvnYJA/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Statement of Investor Complaints for the Quarter ended 31.03.2023',
            link: 'https://drive.google.com/file/d/12mZ0a0C0BUYUXxSyv8SdBMOf9Pyi_dJH/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Nil pending Certificate as on 30.06.2023',
            link: 'https://drive.google.com/file/d/1X--ce6dwUyufehqPBKcAaCJosBp0chmL/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Statement of Investor Complaints for the Quarter ended 30.06.2023',
            link: 'https://drive.google.com/file/d/1_Oko7Cc8yG6M77w-XdVINb9iYcMn4UfD/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Nil pending Certificate as on 30.09.2023',
            link: 'https://drive.google.com/file/d/1hXRpIRFuqiig7CCG-HFkzdKXmOJUDR-m/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Statement of Investor Complaints for the Quarter ended 30.09.2023',
            link: 'https://drive.google.com/file/d/1j89Z6qqb0Qw1MjTnCs3gEMQDB35c_fZK/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Nil pending Certificate as on 31.12.2023',
            link: 'https://drive.google.com/file/d/1ltb62RJTA5pCDx0HvN_RBZg9jhWtPJt6/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Statement of Investor Complaints for the Quarter ended 31.12.2023',
            link: 'https://drive.google.com/file/d/1clWmRwS7Edn35sEpVWGjceGGKZANAhl7/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Nil pending Certificate as on 31.03.2024',
            link: 'https://drive.google.com/file/d/1rritgY5qk-1UfZ0lCoPP_PBH7IwcqnVk/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Statement of Investor Complaints for the Quarter ended 31.03.2024',
            link: 'https://drive.google.com/file/d/1YhTT4Av099zFF5c43_UrEe0MO8ZZM6QY/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Nil pending Certificate as on 30.06.2024',
            link: 'https://drive.google.com/file/d/1u4BrV-3OLotk6ZQyGcfNBMYcep4hoxoe/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Statement of Investor Complaints for the Quarter ended 30.06.2024',
            link: 'https://drive.google.com/file/d/1BDdw2MGjGNV9MlhG2rUp8ajdz8X7owCn/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Nil pending Certificate as on 30.09.2024',
            link: 'https://drive.google.com/file/d/1EmaCLAhScBi850DgniD4LJ_tGPvQBFw8/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Statement of Investor Complaints for the Quarter ended 30.09.2024',
            link: 'https://drive.google.com/file/d/16aP6P9EzZRc8Hkm_eJ-SWUXXZYgsu9qF/view?usp=drive_link',
            category_id: 'investor_guide',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2019',
            link: 'https://drive.google.com/file/d/1-89T_z07X7zS7gFVKxMLv6uvisB4dmZo/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2019',
            link: 'https://drive.google.com/file/d/11rcIxRNJZrZx42_f7PnG--vIV-bg6BMz/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Share Capital Audit Report Quarter ended_31.12.2019',
            link: 'https://drive.google.com/file/d/1vz9vj17HBaJzq-sOSzN2007F4jxpytUO/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Share Capital Audit Report Quarter ended_31.03.2020',
            link: 'https://drive.google.com/file/d/1ag5wlBn0s8TZjgiyMBgV0vi2sW5dgHD6/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2020',
            link: 'https://drive.google.com/file/d/1kBAaAR-AVtgpv9dFoKxxJ7i7vCSXy7XB/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2020',
            link: 'https://drive.google.com/file/d/15Ffdm-SFKKIrHJB2UCNRMRo-cBbtCXnW/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Share Capital Audit Report Quarter ended_31.12.2020',
            link: 'https://drive.google.com/file/d/12D2JNK0HR1AXpEDv_ud08Gi-A_IJQtSf/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Share Capital Audit Report Quarter ended_31.03.2021',
            link: 'https://drive.google.com/file/d/1_duCHcgCH9KDuDarh3cJKHddz_rCi8oa/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2021',
            link: 'https://drive.google.com/file/d/13DLOw4D7thFv-OU8yHoXV1O6NvjCUT46/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2021',
            link: 'https://drive.google.com/file/d/1xFmCPtT6qw_jshEGVVEvoPa0knaXJy1P/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Share Capital Audit Report Quarter ended_31.12.2021',
            link: 'https://drive.google.com/file/d/1z-aVC4R0i4IVjOQ_lpcDZ_jCjfsdeh4B/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Share Capital Audit Report Quarter ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1nv9m6z9gdwknYt2Mw9o4rAOcDBMdybyX/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2022',
            link: 'https://drive.google.com/file/d/1enf1gjcxQwtsUxBadgGy96fAgzzuLsX1/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2022',
            link: 'https://drive.google.com/file/d/1vT9uJ_hXvur-0j5k5LnOOIV1tut1JZWB/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Share Capital Audit Report Quarter ended_31.12.2022',
            link: 'https://drive.google.com/file/d/1q1O2UdL6GL4w53xOIOWo8CX-bIIl-xlD/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Share Capital Audit Report Quarter ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1orvcOQGSSyXK5X8ikArCbBYfSN8NiczO/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2023',
            link: 'https://drive.google.com/file/d/1RLP413bMmzKUkZbzu2KSlX1Yp2goU1Ib/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2023',
            link: 'https://drive.google.com/file/d/14RqsLjFgwiXHwBaS5C-uIbiznwlWiP1J/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Share Capital Audit Report Quarter ended_31.12.2023',
            link: 'https://drive.google.com/file/d/1BI7_MEV3AVpt5SH8sbtHgv069TAFQOhD/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Share Capital Audit Report Quarter ended_31.03.2024',
            link: 'https://drive.google.com/file/d/1Xg_IIkTUyPvLbe_rnX3qxz20YSVbyi_i/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Share Capital Audit Report Quarter ended_30.06.2024',
            link: 'https://drive.google.com/file/d/1ZU6aioeYOcQV0FnPnSlT2tz5LkqhLqXY/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Share Capital Audit Report Quarter ended_30.09.2024',
            link: 'https://drive.google.com/file/d/1MuCa_XTUCVR7KDMDB2J2b5f3cp8HLEHL/view?usp=drive_link',
            category_id: 'share_capital',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2019',
            link: 'https://drive.google.com/file/d/159TCnMEfNz9P82Fg1zT41u20SBFPoa78/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2019',
            link: 'https://drive.google.com/file/d/14RdmH4RU21GVSpV6L0Ru_aL21hWyfvPR/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Unaudited Financial Results & Limited Review Report Quarter Ended 31.12.2019',
            link: 'https://drive.google.com/file/d/1SZPvYtnigb_VWZYiy6189eZRp4uD1lA5/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Audited Financial Results & Auditors Report Quarter Ended 31.03.2020',
            link: 'https://drive.google.com/file/d/16ChQx-5KF934zupww_9NGJD2WzbvTE8C/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2020',
            link: 'https://drive.google.com/file/d/1lVuJczt9dvzZtJvxDjTk5K_6F8rswidg/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2020',
            link: 'https://drive.google.com/file/d/1EL2n7NoTrEQ5aAQGHLolz8Aa9E_c463B/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Unaudited Financial Results & Limited Review Report Quarter Ended 31.12.2020',
            link: 'https://drive.google.com/file/d/1Og4lLKmK6JbJXSDCYruz4hc9NlFRLdY6/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Audited Financial Results & Auditors Report year Ended 31.03.2021',
            link: 'https://drive.google.com/file/d/1-_Ehbm_y2GV51hHuS9cU3NDsySzCAS-e/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2021',
            link: 'https://drive.google.com/file/d/1GQAXV8A9RbXR8TG78PktjR9Y3y7wj7Gz/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2021',
            link: 'https://drive.google.com/file/d/1POAB3-apPsnUwHqdmCfw1qeQ1o_Tl93-/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Unaudited Financial Results & Limited Review Report Quarter Ended 31.12.2021',
            link: 'https://drive.google.com/file/d/1xtVWTRbIB2saDXqhcFBQpAAQ22zDxkrV/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Audited Financial Results & Limited Review Report Quarter Ended 31.03.2022',
            link: 'https://drive.google.com/file/d/1NglezMbVIdz6g0L44l2Gn65ilTpwb_mz/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Statement of Deviation_31.03.2022',
            link: 'https://drive.google.com/file/d/1-ZkmAgr9JgjA6Jr_7p9Ct3e-Wjfnr2pb/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2022',
            link: 'https://drive.google.com/file/d/1cFPCigYI_ZK0ohWtTEzlZJj5oJ0k6ITS/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2022',
            link: 'https://drive.google.com/file/d/1O7n4qq62ny4FdlCsOGplXHoWWF1tJUbw/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Unaudited Financial Results & Limited Review Report Quarter Ended 31.12.2022',
            link: 'https://drive.google.com/file/d/13TXeoM6XAL4zCu7bwzX6ry5GbnVqcTzi/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Audited Financial Results & Auditors Report Quarter Ended 31.03.2023',
            link: 'https://drive.google.com/file/d/1B2atcVFP2khH3798qepD-QEyV3sCm9pC/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Statement of Deviation_30.06.2022',
            link: 'https://drive.google.com/file/d/1tBR861OKBPm8uYsjgZtbhU7APBE1xs_-/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Statement of Deviation_30.09.2022',
            link: 'https://drive.google.com/file/d/1vXju7kGmI34gVPPMkxBlDCN7jVn7FRWS/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Statement of Deviation_31.12.2022',
            link: 'https://drive.google.com/file/d/1KRRHg6uaOYljpT92mn74AG62Ai-TKlG-/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Statement of Deviation_31.03.2023',
            link: 'https://drive.google.com/file/d/1yiHHAyubonJYbGLiH1Ikzs7CXRXzwV_d/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2023',
            link: 'https://drive.google.com/file/d/1_7n-hTW53cRAy9ujDXJACnBGMdhnFMD6/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2023',
            link: 'https://drive.google.com/file/d/1SUlLUNdtw7ssRN3iq2TVQOxsc2XaMzzE/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Unaudited Financial Results & Limited Review Report Quarter Ended 31.12.2023',
            link: 'https://drive.google.com/file/d/1YvjDbMdRmCLkwLYxLQDq6apI8LkdGFTT/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_AuditedFinancial Results & Audited Report Quarter Ended 31.03.2024',
            link: 'https://drive.google.com/file/d/123sCDvkjdq5CrU9sWHNZJQjywoxCD7Eb/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Statement of Deviation_30.06.2023',
            link: 'https://drive.google.com/file/d/1Z2qJ0YLyp9U55IHWtIas2GTg6G5f0WoM/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Statement of Deviation_30.09.2023',
            link: 'https://drive.google.com/file/d/1DHwhyH5nKSEgf5vQZn6PmSSaN_0jbzGy/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Statement of Deviation_31.12.2023',
            link: 'https://drive.google.com/file/d/14kj2qXTnpDdz0B2PlkgfKEkVJ70eTMXz/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Statement of Deviation_31.03.2024',
            link: 'https://drive.google.com/file/d/1Pxl16X-obbgX34bmLES3N4I30s0gZsDE/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.06.2024',
            link: 'https://drive.google.com/file/d/1gNspBMgF0WePBQi1rOG9Ujuqt7Imra3x/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Unaudited Financial Results & Limited Review Report Quarter Ended 30.09.2024',
            link: 'https://drive.google.com/file/d/1cgOzY8VZNBItdUaW9KgCZh1oMcuRgBEg/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Statement of Deviation_30.06.2024',
            link: 'https://drive.google.com/file/d/1Wu7aiVSpfHBf5A0y_JeemfEshVrvKcdd/view?usp=drive_link',
            category_id: 'finance_statement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Related Party Transactions half year ended_30.09.2019',
            link: 'https://drive.google.com/file/d/1tWokSbKmcmCysWzel7SKKCEWuYsL9L9L/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Related Party Transactions half year ended_31.03.2020',
            link: 'https://drive.google.com/file/d/1tjeDsTn2IptCWSF8swMA4XVJVuuN4pjv/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Related Party Transactions Half year ended_30.09.2020',
            link: 'https://drive.google.com/file/d/1QjaGHYJqUyk32EJnSf-Iui5n5GZIepjC/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Related Party Transactions Half year ended_31.03.2021',
            link: 'https://drive.google.com/file/d/1uPDTPP8mF900gJhHz4dRvObagXBZzFNy/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Related Party Transactions half year ended_30.09.2021',
            link: 'https://drive.google.com/file/d/1KP6QevNW0m5SC_8vJZemSsh1WmY612ct/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Related Party Transactions half year ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1gxMEHMLk897T3T3-bGiDuTorlcWB3SVu/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Related Party Transactions Half year ended_30.09.2022',
            link: 'https://drive.google.com/file/d/1J0KOwnSdPJ2AEoLUyUIUtnkxNhjvk_qh/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Related Party Transactions Half year ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1CPC4Ooh_R1ETZVsJWWmTuAZ7pyFY7qP0/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Related Party Transactions Half year ended_30.09.2023',
            link: 'https://drive.google.com/file/d/1gzTN9MYBQb3fyKmUMgSAqpBab9O8dpTT/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'w2_Related Party Transactions Half year ended_31.03.2024ord',
            link: 'https://drive.google.com/file/d/1hgBJrzQ_LGiy83iU31BnD2ORuabImsjG/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Related Party Transactions Half year ended_30.09.2024',
            link: 'https://drive.google.com/file/d/11X4zsHo592RSkRT59F7T9bal4Vmeh8zA/view?usp=drive_link',
            category_id: 'party_disclosures',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Annual Report FY 2019-20',
            link: 'https://drive.google.com/file/d/1d5RtkGKC480w5ec2eUpyuRTqJzbWkODu/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Annual Report FY 2020-21',
            link: 'https://drive.google.com/file/d/1AlF_4fUylhTwW804aTkk8GnlgvWwRu3s/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Annual Report FY 2021-22',
            link: 'https://drive.google.com/file/d/1Qt17lyQ-iHE9bxTiQSdTtuqR0Sg40l2B/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Annual Report FY 2022-23',
            link: 'https://drive.google.com/file/d/1W7i4ow_aB8qMODpGPqoqiWylkknXzoqC/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Annual Report FY 2023-24',
            link: 'https://drive.google.com/file/d/1UWj7sT_LF2muLbE6E9bYS_MiOJCnByWq/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Corrigendum to AR_ RAR_2021-22',
            link: 'https://drive.google.com/file/d/1NWt-mm2GQfMEp65JNe0LaGk023f_WF-D/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
        {
            id: '1',
            label: 'Corrigendum to AR_ RAR_2023-24',
            link: 'https://drive.google.com/file/d/1iGMi5B3jzhJC2YdAk-9feGABd1Uhhk3_/view?usp=drive_link',
            category_id: 'annual_report',
            year: '#'
        },
     
       
        {
            id: '1',
            label: 'Business Update - 20.07.2020',
            link: 'https://drive.google.com/file/d/1Hh7JZZCzN1oERjdwkHUQuwfObgPH6tyv/view?usp=drive_link',
            category_id: 'business_update',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Business Update_29.09.2020',
            link: 'https://drive.google.com/file/d/1RwhxrkxqEfDD61ayaxuBb6vqN2PKtgHW/view?usp=drive_link',
            category_id: 'business_update',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Business update to BSE dated_23.04.2021',
            link: 'https://drive.google.com/file/d/1Kk2mKkM_VacMnxRxQr8w8-NOu0tgsjgV/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Business update to BSE dated_05.05.2021',
            link: 'https://drive.google.com/file/d/16iR51u-jNMM84cFzzxpasGyaacP-v9QL/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Business Update to BSE dated_05.07.2021',
            link: 'https://drive.google.com/file/d/13M2kWGROXjIlMLhFobDeAKGqUReWU_js/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Business Update to BSE dated_09.08.2021',
            link: 'https://drive.google.com/file/d/1ATnlzXZ0Qli47NkMXuN6e0AKSUpuKcja/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '5_Business Update to BSE dated_16.09.2021',
            link: 'https://drive.google.com/file/d/1jmPoBRTOUHWnvuGHCOgYE_6SSXEEgbFd/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '5_Business Update to BSE dated_27.09.2021',
            link: 'https://drive.google.com/file/d/1xd8GSqoalA1EaYpVP04tiB16gSnmc073/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '6_Business Update to BSE dated_11.10.2021',
            link: 'https://drive.google.com/file/d/1MBq9otMcsg7nESA6nv0FRAnvyErpgDe_/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '7_Business Update to BSE dated_09.11.2021',
            link: 'https://drive.google.com/file/d/1tvtHsPlCQMoul3VggJhb9e0Ewm3NNTlV/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '8_Business Update to BSE dated 06.12.2021',
            link: 'https://drive.google.com/file/d/1M67IdErQO6Gu5SD2d5OiJ1GP-k0C1XXg/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '9_Business Update to BSE dated_03.01.2022',
            link: 'https://drive.google.com/file/d/1WCmC-awmvHNIWV7Tt_1an-G-pVEGxqd2/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '10_Business Update to BSE dated_17.02.2022',
            link: 'https://drive.google.com/file/d/100RYD_iQOHX0Xm5Z2HhFzFsfmeORwyFZ/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '11_Business Update to BSE dated 08.03.2022',
            link: 'https://drive.google.com/file/d/1HPSR2fCd8dQlp2dJDngb8H9BmrS8f7az/view?usp=drive_link',
            category_id: 'business_update',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Business Update to BSE dated_04.04.2022',
            link: 'https://drive.google.com/file/d/1DhIhUrwaaXzgp4uGAne3-SgArMUd9RPg/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Business Update to BSE dated_11.04.2022',
            link: 'https://drive.google.com/file/d/1SZWafhGCMhu8roZCqwV-u229kdMnTttM/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Business Update to BSE dated_02.05.2022',
            link: 'https://drive.google.com/file/d/1au8QwIvZlTuRIRKkxBnFGD6cCsny57zi/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Business Update to BSE dated_06.06.2022',
            link: 'https://drive.google.com/file/d/1llFuhEaHJUxVcFblMA0h0p0iHJhjBAt2/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '5_Business Update to BSE dated_13.06.2022',
            link: 'https://drive.google.com/file/d/1nGzg6NJC7qEZtbFVFti5mCnJU2xj3FIM/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '6_Business Update to BSE dated_04.07.2022',
            link: 'https://drive.google.com/file/d/1jOZQh8rVinQGe8lBCMq6HPuLbYe6pdeg/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '7_Business Update to BSE dated_11.07.2022',
            link: 'https://drive.google.com/file/d/1e6WY2t0iL9QL__xl9wQ_QUc3UxJ8_V82/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '8_Business Update to BSE dated_18.07.2022',
            link: 'https://drive.google.com/file/d/1b9zjHPJpUVGnS_Cm7B7tHCDH0njv7YUf/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '9_Business Update to BSE dated_25.07.2022',
            link: 'https://drive.google.com/file/d/1xrow0-Paqmy7a8Cko5cR6xJsovQrNWGt/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '10_Business Update to BSE dated_03.08.2022',
            link: 'https://drive.google.com/file/d/11Ak_4cFSAAzVEoTEEsPp7Hh2kCN9ZwgT/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '11_Business Update to BSE dated_05.09.2022',
            link: 'https://drive.google.com/file/d/18xLKkoqYluqHkIKIp-uWRViq9I7kKhJz/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '12_Business Update to BSE dated_07.10.2022',
            link: 'https://drive.google.com/file/d/1tPfqvJuRHHGE3SDAACLuguAQSb5pTE8f/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '13_Business Update to BSE dated_02.11.2022',
            link: 'https://drive.google.com/file/d/1cn7TXxhS5IZYMLdh5SjShMygBlEBI9B1/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '14_Business Update to BSE dated_14.11.2022',
            link: 'https://drive.google.com/file/d/135O4tW7RWVDcG4wbQw0uouFAMjVZdjvh/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '15_Business Update to BSE dated_12.12.2022_Nov22',
            link: 'https://drive.google.com/file/d/1JcrzAlxeW_j8inM7EjowC1rOhZBjTtKt/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '16_Business Update to BSE dated_19.12.2022_ISO',
            link: 'https://drive.google.com/file/d/14EwKNB0GeUH7SoHiETqCwCl38DzMDKsW/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '17_Business Update dated_02.01.2023',
            link: 'https://drive.google.com/file/d/1967-lx2OuNsMzagDYNp6WoWDcnPQJg46/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '18_Business Update dated_07.02.2023',
            link: 'https://drive.google.com/file/d/19ijKsO-EYPz3oarCwqd-Em2WvdMUePbu/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '19_Business Update_Quarter & Year ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1ENVFNvFB18IwivbNkB7PdfG4RggFHJlj/view?usp=drive_link',
            category_id: 'business_update',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Business Update Quarter ended 30.06.2023',
            link: 'https://drive.google.com/file/d/13ZbUTNJOG5TPgWlV4bn63i3dkrYOfi2q/view?usp=drive_link',
            category_id: 'business_update',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Business Update dated 05.07.2023',
            link: 'https://drive.google.com/file/d/1gKw0scuvaqmFy56H8psspgux2z2YVmxf/view?usp=drive_link',
            category_id: 'business_update',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Business Update Quarter & Half year ended_30.09.2023',
            link: 'https://drive.google.com/file/d/1X9vNeC6XBDuwcL05UaS1EDHNGP_qgpmM/view?usp=drive_link',
            category_id: 'business_update',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Business Update Quarter ended 31.12.2023',
            link: 'https://drive.google.com/file/d/1hCeZCYR-YS9Q4wvcctlkg5IwOg3icGhR/view?usp=drive_link',
            category_id: 'business_update',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Business Update_11.11.2024',
            link: 'https://drive.google.com/file/d/1CKhaxasCdggfLh65Q3Lh6aw9mId5QOWB/view?usp=drive_link',
            category_id: 'business_update',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_BM Notice to be held on 30.05.2019',
            link: 'https://drive.google.com/file/d/1fEE2JS7s_IPrnJReL93dHdna2oF6W4HJ/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Newspaper ad Audited Financial Results for the Quarter and Year ended 31.03.2019',
            link: 'https://drive.google.com/file/d/1m7RdB4LHszmU876obrNyfJaxVkzlOh9Y/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_BM Notice to be held on 13.08.2019',
            link: 'https://drive.google.com/file/d/1xDlC0dvZM7j498y3_MYzoZ5056H_pAii/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Newspaper ad Unaudited Financial Results for the Quarter and Year ended 30.06.2019',
            link: 'https://drive.google.com/file/d/1cDZK69PMXfmK0KsfiItNmjRxRrB3LZhX/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_BM Notice to be held on 13.09.2019',
            link: 'https://drive.google.com/file/d/1gX6ROOT7UJaWXJOmC9bCCtHukSaXExjB/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Newspaper Cutting_New format_Unaudited Financial results quarter ended_30.06.2019',
            link: 'https://drive.google.com/file/d/1HTEHpDvpVcoUJiE8vSyHl5p_TSsliyhv/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_AGM Notice_E Voting_Book closure_AGM on 26.09.2019',
            link: 'https://drive.google.com/file/d/1ukwPF2ZqQMSykLhFvSRuo858njyZtKIV/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Notice of Corrigendum to Annual Report 2018-2019',
            link: 'https://drive.google.com/file/d/1wtguyG6EE7HOVDydO6dGFhI03L-S66Zh/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '5_Newspaper ad Unudited Financial Results for the Quarter and Year ended 30.09.2019',
            link: 'https://drive.google.com/file/d/1UAZwxccRDgeC7XVvnxdwys2DdUyIUFNF/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '6_BM Notice to be held on 10.02.2020',
            link: 'https://drive.google.com/file/d/1VUNrffucjUdZezfp7EtRgV92SgCIcN9M/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '6_Newspaper Cutting_Unaudited Financial results quarter ended_31.12.2019',
            link: 'https://drive.google.com/file/d/1DN8KNTpM7f3znbRoDxnjSuj-0zrg-Ac9/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_BM Notice to be held on 30.06.2020',
            link: 'https://drive.google.com/file/d/1LbeY3oTdkDo2UTn6-blHwqHUgJvon5am/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Newspaper ad_Audited Financials for year ended_31.03.2020',
            link: 'https://drive.google.com/file/d/1uwrrEnjJ-yqOrbioGq5VDxtyA5sY4myG/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_BM Notice to be held on 31.07.2020',
            link: 'https://drive.google.com/file/d/1LYzDTyotfuLEq76NkmYfaUOwBI-NAUGu/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_BM Notice to be held on 03.09.2020',
            link: 'https://drive.google.com/file/d/1TzzAFyzGppnedSzQpNP2gfvCQl67wp_1/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Newspaper ad_e mail_phone no_ updation of Shareholders',
            link: 'https://drive.google.com/file/d/1xrrnVFdYscuxfh7-R8yVc19GrGidOcsb/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '5_BM Notice to be held on 15.09.2020',
            link: 'https://drive.google.com/file/d/1VgSwA7FtKtYQTd3Qa1lsPkkR3_HPataV/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '6_Newspaper ad_Audited Financials for quarter ended_30.06.2020',
            link: 'https://drive.google.com/file/d/1UbQQLXsNwvZLng6KqC0P9QKM8tZ3MCzT/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '7_BM Notice to be held on 12.11.2020',
            link: 'https://drive.google.com/file/d/1b4uJVV8T97_QiDloadn6ibDptTbpXoiQ/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '7_Newspaper ad_Unaudited Financials for quarter ended_30.09.2020',
            link: 'https://drive.google.com/file/d/1NO_5J26LigZ8VvwPyyFxfsICELEMAJQE/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '8_BM Notice to be held on 05.01.2021',
            link: 'https://drive.google.com/file/d/124DU3RK9PeNGGeKBpkSaEiFKvTOVUlsI/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '9_BM Notice to be held on 12.02.2021',
            link: 'https://drive.google.com/file/d/1Zk0dJJ7LoQElU5xjh_rhgB_B9xbSXTHi/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '9_Newspaper ad_Unaudited Financials for quarter ended_31.12.2020',
            link: 'https://drive.google.com/file/d/1FObijLLWEkMxtgGi6Deh0ZiE-TeXZaxx/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '10_BM Notice to be held on_03.03.2021',
            link: 'https://drive.google.com/file/d/1PJxERp0vdoJn80H5RVshAtWfff04HlsK/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '11_Newspaper ad_e voting_Postal ballot_11.03.2021',
            link: 'https://drive.google.com/file/d/1sRT-o9ZXcZIAZP74gNl7-I5dDvs_KH0B/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '12_BM Notice to be held on 26.03.2021',
            link: 'https://drive.google.com/file/d/16WoRD527VwflOeHnea_s8SluD7w2xDyR/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_BM Notice to be held on 05.05.2021',
            link: 'https://drive.google.com/file/d/1WDSwKIbJVI5Rkhvc6XDG6S3Gap7mhra5/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Newspaper ad_Addendum to Postal Ballot_07.05.2021_06.06.2021',
            link: 'https://drive.google.com/file/d/124XtKJTttChp03MkVRBie6z3WwYjPuFU/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Newspaper ad_Postal Ballot_07.05.2021',
            link: 'https://drive.google.com/file/d/1w2649BPNTxk6jt-7udoI4qIdJHnS_Ya3/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Newspaper ad_Audited Financial statements_Quarter & year ended_31.03.2021',
            link: 'https://drive.google.com/file/d/16xrn0VB95nFPzM_QODkvEdhUotSFpXXb/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Newspaper Ad_Unaudited Financials_Quarter ended_30.06.2021',
            link: 'https://drive.google.com/file/d/1Btwe_0wYSTx3ngR8i0ngMknVXP7g8JMo/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '5_Notice of BM to be held on_02.09.2021',
            link: 'https://drive.google.com/file/d/1Z4CAJOy9tX8Mnpv3GqRIujq6wxfVBTck/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '6_Notice of AGM to be held on 24.09.2021',
            link: 'https://drive.google.com/file/d/1vKF9_Tzvj9MXtx-pQQqdTDDYjZjKnZWG/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '7_Notice of BM to be held on 28.10.2021',
            link: 'https://drive.google.com/file/d/1th8I7fgEmhKjX65U-vTB-fOgQMTiqTh2/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '8.0_Newspaper ad of Notice of EGM to be held on 27.11.2021',
            link: 'https://drive.google.com/file/d/1KZkOHscUm1JrKDbHzdfgycXy-ClSWOnh/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '8.1_Corrigendum to newspaper ad_27.11.2024 on 18.11.2021',
            link: 'https://drive.google.com/file/d/1k6Mfsou8Li9KDgpFGiv_7dBagKZGzQDK/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '8.2_Final Corrigendum to newspaper ad_27.11.2024 on 16.11.2021',
            link: 'https://drive.google.com/file/d/1zZhGxH2Xen4GqIQMljQxKxkYJiCYFUvB/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '9_Newspaper Ad_Unaudited Financials_Quarter ended_31.12.2021',
            link: 'https://drive.google.com/file/d/1t7x3tQIIrnve2nWhloccTVVef96idm0I/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Newspaper Ad_Audited Financials_Quarter ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1KpD1rFkgXg8Q14y0ixlS9keRzP0stNwV/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Newspaper ad _AGM Notice_AGM to be held on 30.08.2022',
            link: 'https://drive.google.com/file/d/1hNqvTv1CLjAJXWzudKL3-oe7XbQ3-rRf/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Newspaper Ad_Audited Financials_Quarter ended_30.06.2022',
            link: 'https://drive.google.com/file/d/1Siz6FZsUg7xIStfqsb8ZoDGVMHkwozMp/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Notice of Corrigendum to Annual report FY 2021-22',
            link: 'https://drive.google.com/file/d/1NvXBGxzQ1KBwgsgi8w3PLRLTQ1nPeuIp/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Newspaper Ad_Unaudited Financials_Quarter & half year ended_30.09.2022',
            link: 'https://drive.google.com/file/d/1Sh9Urc0wfy4PKc6dc799jO1a406J-Bmx/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '5_Newspaper Ad_Unaudited Financials_Quarter ended_31.12.2022',
            link: 'https://drive.google.com/file/d/1iJ25teQHy-dCG_1rkdV5eyYdMIw4F1ad/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '6_Newspaper Ad_Postal ballot_14.03.2023',
            link: 'https://drive.google.com/file/d/11ZwMKUEGwaqASceCgeHjl3jq9HU3TE_x/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Newspaper Ad_Audited financials_Quarter & year ended_31.03.2024',
            link: 'https://drive.google.com/file/d/1psctOwPstRxktbATD6Xrf0F8bQDJH9j1/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_AGM Notice_to be held on 28.07.2023',
            link: 'https://drive.google.com/file/d/1ayTuYAkGl0QhYEni3Qp9MoD_3BXxHMMO/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Newspaper Ad_Unaudited Financials_quarter ended 30.06.2023',
            link: 'https://drive.google.com/file/d/1NSn9E2BAGVjfg1qZg-lt1rhRsVq7gcXu/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Newspaper Ad_Unaudited Financials_quarter & half year ended 30.09.2023',
            link: 'https://drive.google.com/file/d/1oq-VhIARA1p6VoaCi9dXRejWraPNZizW/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Newspaper Ad_Unaudited Financials_quarter ended 31.12.2023',
            link: 'https://drive.google.com/file/d/1NUw8xNQhSlRySb2BKODfaZI1AjFXOTzC/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Newspaper Ad_Audited Financials_Quarter & year ended 31.03.2024',
            link: 'https://drive.google.com/file/d/1j1p9_NQx2PUgx1yJwZoCcSz__V61a6WS/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Newspaper Ad_Audited Financials_Quarter & half year ended 30.06.2024',
            link: 'https://drive.google.com/file/d/1qhvsWU_LnEvy59o1Pb0mklftOF5cOHZ-/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2.0_AGM notice Ad to be held on 28.06.2024',
            link: 'https://drive.google.com/file/d/1vfw7IaHuSqqyeGucNLBOV94tVdQiPjgJ/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2.1_Corrigendum to AGM Notice_25.06.2024',
            link: 'https://drive.google.com/file/d/19-K4MmFl0VD8VBBhjMUysuhHILwwdlfu/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '3_Newspaper Ad_Postal Ballot Notice_10.08.2024',
            link: 'https://drive.google.com/file/d/1ffimnkLS_0ehWcxDPvTUSib2pRJ0wF1L/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '4_Newspaper Ad_Unudited Financials_Quarter & half year ended 30.09.2024',
            link: 'https://drive.google.com/file/d/1wPthzuHJnmpDOVgezfrbU4kY4cGmr8T5/view?usp=drive_link',
            category_id: 'newspaper',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_30.09.2019',
            link: 'https://drive.google.com/file/d/1ZLIvv8r18FfxsUPQbXW2BAQwTuPg63IF/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2019-2020'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2019',
            link: 'https://drive.google.com/file/d/1IsY_FNqWOzpH7Rjt7RlMg8lAIIEoer5U/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2019-2020'
        },
        {
            id: '1',
            label: 'Certificate_Reg 40(9)_30.09.2019',
            link: 'https://drive.google.com/file/d/1cZhyNZ3xZJZ8cYe36i-iwpGDebbkqqn5/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2019-2020'
        },
        {
            id: '1',
            label: 'Certificate_Reg 40(9)_31.03.2019',
            link: 'https://drive.google.com/file/d/1mOZExrISxZpWPZbI3wxT1elOOyGLZPgR/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2019-2020'
        },
        {
            id: '1',
            label: 'Secretarial Compliance Report for the year ended 31st March, 2019',
            link: 'https://drive.google.com/file/d/1Mlazp7Q1EEDTDbQSvUzpiKe5jI6pbH6Q/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2019-2020'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2020',
            link: 'https://drive.google.com/file/d/19JBSjeYr_e5NkWwlp3gJnLwigaEgHBZk/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Compliance Certificate_Reg 40(9)_31.03.2020',
            link: 'https://drive.google.com/file/d/1mwNwWQW2RmQ8h7wRq3RV1EHMZDv0CQZt/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Disclosure of not being a large corporate',
            link: 'https://drive.google.com/file/d/1F48XI5Be5hutDCOzi_QMRe2ghGbvsqfn/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Disclosure under SAST Reg 30(1) &(2)_31.03.2020',
            link: 'https://drive.google.com/file/d/1ky8gkwJjIYHlKPJvHSpMqmA9Y-_Ggbkc/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Secretarial compliance report_31.03.2020',
            link: 'https://drive.google.com/file/d/1Vqr_Pjo3oSROHK4bob4EQJ4754HXMBOV/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Annual Return_Form MGT 7_2020-21',
            link: 'https://drive.google.com/file/d/16E79SKaqybMOycilmthj9SWOJpG40FAq/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2021',
            link: 'https://drive.google.com/file/d/1tsW1lpoBVqX7sM-QG9q7ZT_5SeVJ2_lJ/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Compliance Certificate_Reg 40(9)_31.03.2021',
            link: 'https://drive.google.com/file/d/1mq_ozInaf0a9Zt6V29t7W09bFyMqaCVF/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Disclosure regarding not being a large corporate',
            link: 'https://drive.google.com/file/d/1NAaGfXvvdhjzFXDEzz5jd1gIxxkiqtpG/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Disclosure under Reg 30(1) & (2)_SAST_31.03.2021',
            link: 'https://drive.google.com/file/d/1cOUUsup-FhUjMtkM1zwoVkCFzOOgxfvT/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Secretarial Compliance Report_31.03.2021',
            link: 'https://drive.google.com/file/d/1Cp9jToGH93KG40XesPki3ozLAVxKbANC/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Annual Return_Form MGT 7_2021-22',
            link: 'https://drive.google.com/file/d/1WhBrJ57tcSj5xl38sRMQqJLVtVEz5NDT/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2022',
            link: 'https://drive.google.com/file/d/1C8pOEr_EfZ9ZLorG62gwLi-vK4Yikxn0/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Compliance Certificate_Reg 40(9)_31.03.2022',
            link: 'https://drive.google.com/file/d/1Hz9NsAbkCpW7st_Q2d0-ETX9EFNdMsdf/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Diclosure under 30(1) and 30 (2) SAST Regulation_31.03.2022',
            link: 'https://drive.google.com/file/d/13ZR9P68GhbSUXcvhTA06Iw5F2q726UC2/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Initial Disclosure for not being a large corporate_FY 2022-23',
            link: 'https://drive.google.com/file/d/1gyQI4mlkfmmcWxx2T2TU_c7C8sopsFwF/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Secretarial Compliance Report_31.03.2022',
            link: 'https://drive.google.com/file/d/1quUNB8z1FRSAvWzX8PVFhiltJAoRx0S8/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Annual Return_Form MGT 7_2022-23',
            link: 'https://drive.google.com/file/d/12OE4conRZ2CX5QDK8Vy5LEPq6obhcKfT/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2023',
            link: 'https://drive.google.com/file/d/1tdv0slkl5oYVkxBySHjq3l5TWJUS3F_2/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Compliance Certificate_Reg 40(9)_31.03.2023',
            link: 'https://drive.google.com/file/d/1ITQB8vFQB6RoQSTNGs5Qbv4LHgbu95qr/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Disclosure_SAST 31(4)_31.03.2023',
            link: 'https://drive.google.com/file/d/1LU4OJO8P2YP5yQtRSw-a1lMYzKJUnxpB/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Initial Disclosure for not being a large corporate_FY 2023-24',
            link: 'https://drive.google.com/file/d/1RQLK-RmAFnNR5rFqaMnF1oe3WyBld08h/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Secretarial Compliance Report_31.03.2023',
            link: 'https://drive.google.com/file/d/1N2dOQxZuluQSLMA__mdSrK3wTQX45zko/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Annual Return_Form MGT 7_2023-24',
            link: 'https://drive.google.com/file/d/1ThR_cGgEdel0qwbuUGdgdQ7LJnh30KmY/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Certificate_Reg 7(3)_31.03.2024',
            link: 'https://drive.google.com/file/d/15FDNtV7OmC0IHrLjW-1FG-Hiz0hizNw6/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Compliance Certificate_Reg 40(9)_31.03.2024',
            link: 'https://drive.google.com/file/d/12GjW2nl2ZRWEJLllWrII8LyeOanqdd_i/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Disclosure under Reg 31(4)_FY ended 31.03.2024',
            link: 'https://drive.google.com/file/d/12-6Tfx5SezPAsjrOcP_51ZtPJr9riGqY/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Initial Disclosure for not being a large corporate_FY 2024-25',
            link: 'https://drive.google.com/file/d/14usi8-lNIr5oyx6qcIe_ECoxk8LD2xaP/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Secretarial Compliance Report_31.03.2024',
            link: 'https://drive.google.com/file/d/1QYVf71ookyvsW72R78w8jmtfsaqcP2QD/view?usp=drive_link',
            category_id: 'annual_disclosure',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Intimation of BM_21.05.2018',
            link: 'https://drive.google.com/file/d/1pW6tdRsG23ItQkF7q0Eq0_nx0drDE-a0/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '1_Outcome of BM_30.05.2018',
            link: 'https://drive.google.com/file/d/1VnQK9RmMiiSLhv18TaktbGpJflT3zRij/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '2_Intimation of BM_01.08.2018',
            link: 'https://drive.google.com/file/d/16RUzKtO5EMIH_oQufEHxk-frdTFKkjhj/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '2_Outcome of BM_11.08.2018',
            link: 'https://drive.google.com/file/d/1gSApmxeWoDRa1PRQ_lV7zTKpvbf-2d85/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '3_Intimation of BM_20.08.2018',
            link: 'https://drive.google.com/file/d/1Mg18WVPZCz_KVm2-HQq4Eo0Uw23V7lwA/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '3_Outcome of BM_28.08.2018',
            link: 'https://drive.google.com/file/d/1JsHVtjbVexYYxoHste7YHFwtERbCb9FY/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '4_Intimation of BM_22.10.2018',
            link: 'https://drive.google.com/file/d/1FXuWDwkJnxCY1AMKQTbP-P-s4sqDBoH-/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '4_Outcome of BM_03.11.2018',
            link: 'https://drive.google.com/file/d/1miIwbZx6Ox-JHG_9bSDa40js265L7B65/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '5_Intimation of BM_05.02.2019',
            link: 'https://drive.google.com/file/d/1NQF_F9s5RGREPC_jMgt2_fEcbF1XGMJW/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '5_Outcome of BM_13.02.2019',
            link: 'https://drive.google.com/file/d/1U2cff7h2uDj9TQ6qau6M7i8IHQoAJeea/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '6_Intimation of BM_15.03.2019',
            link: 'https://drive.google.com/file/d/1fl8J74gKaOSQ01AopDBVy-8NvsciGaza/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '6_Outcome of BM_22.03.2019',
            link: 'https://drive.google.com/file/d/12UJ20CAuZSPpJd5pA6GVVcJtBWDAF2PA/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2018-2019'
        },
        {
            id: '1',
            label: '1_Notice of BM_ 19.05.2019',
            link: 'https://drive.google.com/file/d/1vbox-OlyRLsAXH7ldcJUiIMc1xz2ZB8W/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Outcome of BM_30.05.2019',
            link: 'https://drive.google.com/file/d/1fw0Hpgmc5CxLPt9hsS5nzjBVVAN7XsSy/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Notice of BM_03.08.2019',
            link: 'https://drive.google.com/file/d/1278Owrn7AFRVDBQxhgX4TVpGGWvLqpD3/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Outcome of BM_13.08.2019',
            link: 'https://drive.google.com/file/d/1E6ouupAPsb19Yiv7_1vammoVeOsAVWR5/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Notice of BM_04.09.2019',
            link: 'https://drive.google.com/file/d/1IWsvdTUfic1K8sYtdTBXvlX90M0d7o81/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '3_Outcome of BM_13.09.2019',
            link: 'https://drive.google.com/file/d/16a9xMaU94iVtSnxkBactK7w4GAPkxJmX/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Notice of BM_05.11.2019',
            link: 'https://drive.google.com/file/d/16BsR5xbkUy4maFV0p6cdYtnnIY2a8YPh/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Outcome of BM_14.11.2019',
            link: 'https://drive.google.com/file/d/1-AVfl12xWBHiysFGCH_HhVMXO7HlgnnB/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '5_Notice of BM_29.01.2020',
            link: 'https://drive.google.com/file/d/1jy-6G_eAY-oYBDvmoXUND_-JDeP-048D/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '5_Outcome of BM_10.02.2020',
            link: 'https://drive.google.com/file/d/11K0fvew-xcv6MxLuvAyF1ayZyESPs_E_/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Notice of BM_22.06.2020',
            link: 'https://drive.google.com/file/d/1f23SjSypiI4r-fkA6DIeFA_XTERAs621/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Outcome of BM_30.06.2020',
            link: 'https://drive.google.com/file/d/13DpGlGqyvrG1sl5dygmGBDpsw2FNWxRu/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Notice of BM_22.07.2020',
            link: 'https://drive.google.com/file/d/1wZ2uLB8XTUVi_A4uK2UuGUUTa1gX-8xg/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Outcome of BM_31.07.2020',
            link: 'https://drive.google.com/file/d/1fXotbDCu4cGgSErtXmqaVvAGfqm7I39X/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Notice of BM_26.08.2020',
            link: 'https://drive.google.com/file/d/1ErHVVk0wjfEeKxhcybtU-QQtXTXZIZtt/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Outcome of BM_03.09.2020',
            link: 'https://drive.google.com/file/d/1q6wSHwfdoL-9rIk6wwazSoUudFUa2xRb/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Notice of BM_05.09.2020',
            link: 'https://drive.google.com/file/d/1Xx-Ohef_8BwAE97ikAtDAat2svlA2SaO/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Outcome of BM_15.09.2020',
            link: 'https://drive.google.com/file/d/1nJcbzq5nQyMT2cDXg0JzXlt7P9gT93sZ/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Notice of BM_22.04.2021',
            link: 'https://drive.google.com/file/d/1omG40XwAkCqc4ak2LP6IneTIDJxVlR8X/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Outcome of BM_05.05.2021',
            link: 'https://drive.google.com/file/d/1PNL8sn7p_wtEEKbBa_933rP8Xa5PaTpf/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Notice of BM_18.06.2021',
            link: 'https://drive.google.com/file/d/1FoLMa7uVefQ2kbAGEBxqMUFjb48Fbz3v/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Outcome of BM_28.06.2021',
            link: 'https://drive.google.com/file/d/17eCp-6EML5MS2wWItIRJeYcIcBuOh3kI/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Notice of BM_22.07.2021',
            link: 'https://drive.google.com/file/d/1QFCHr9YFRI7HGiLbxYxfafRmm6DP3lu6/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Outcome of BM_02.08.2021',
            link: 'https://drive.google.com/file/d/1UpVynzZ75C3S3A5HgzOn5T8uWf73ZWv3/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Notice of BM_13.08.2021',
            link: 'https://drive.google.com/file/d/1u0mwkLuDh3xdz0WTjuzCUDjhC6S4i2xW/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Outcome of BM_02.09.2021',
            link: 'https://drive.google.com/file/d/13QgGfUgt2Hyr2vXkaihu43OVpVF2QEuJ/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '5_Notice of BM_11.10.2021',
            link: 'https://drive.google.com/file/d/15s8QmLH1L4WWvrO5H8eVGF6Z1XWTI-hn/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '5_Outcome of BM_18.10.2021',
            link: 'https://drive.google.com/file/d/1m3Mb5TNx1liNfEuOrx_P1MLN3tiHOYgf/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '6_Notice of BM_22.10.2021',
            link: 'https://drive.google.com/file/d/18gQPMRa3l9LGGfGDVlyHAqEwNHHvskzs/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '6_Outcome of BM_28.10.2021',
            link: 'https://drive.google.com/file/d/11EYumgqOr710jNPcpDMLHc3qYtxfyzWW/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '7_Notice of BM_10.01.2022',
            link: 'https://drive.google.com/file/d/17nPdyZ0JGsfg8hPo7os2oWuKCnCvKCJR/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '7_Outcome of BM_17.01.2022',
            link: 'https://drive.google.com/file/d/1ipr_p4VpV390X5ANf5xUtXzzxbTbAaR7/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '8_Outcome of BM_24.01.2022',
            link: 'https://drive.google.com/file/d/1qAw6d6xHan01z3k5ZB00galddCKewlQ6/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '9_Notice of BM_25.03.2022',
            link: 'https://drive.google.com/file/d/1EVj3_NqTRn5q4d5_YYoVnPYUY_zOputg/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '9_Outcome of BM_30.03.2022',
            link: 'https://drive.google.com/file/d/1VdZ1ykTd1KjbVy2L2cSIU7jluhcUbtrk/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Notice of BM_13.05.2022',
            link: 'https://drive.google.com/file/d/1Q7X2byxdZGZ3EMPLTIVMQktz82VEGz5C/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Outcome of BM_20.05.2022',
            link: 'https://drive.google.com/file/d/1qF6KPanqvJ3MR5UrooWuhXIocYmzi9q-/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Notice of BM_26.07.2022',
            link: 'https://drive.google.com/file/d/1ylBqKrUHYx9yMa8hzLvLTf0J2-UbbRD6/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Outcome of BM_01.08.2022',
            link: 'https://drive.google.com/file/d/10FtA36bPTmw9VLGmDTWyKrCS-PIEcDQi/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Notice of BM_31.10.2022',
            link: 'https://drive.google.com/file/d/1icUV-mux0L1Ki6b-ocaDFqsttjCHPBN7/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Outcome of BM_08.11.2022',
            link: 'https://drive.google.com/file/d/1C1A9UAbvB7gMEF1LXiI7UeFMmRm3OH7j/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Notice of BM_12.01.2023',
            link: 'https://drive.google.com/file/d/10DEuYMpXvRsQXAGH1eP4qEMEDTVQhMB4/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Outcome of BM_ 17.01.2023',
            link: 'https://drive.google.com/file/d/1J-90X2_Nrin4-ciVymBlQHl2a17Pusl1/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '5_Notice of BM_31.01.2023',
            link: 'https://drive.google.com/file/d/1hzZtwFKrGluIuGxD4l1AW8abOjEjo2Ay/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '5_Outcome of BM_07.02.2023',
            link: 'https://drive.google.com/file/d/1hjOQrhtSJtpJcLV-kp6WxU_fH6A6q0Bn/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '5_Revised Outcome of BM_dated 08.02.2023',
            link: 'https://drive.google.com/file/d/1TLXhFA4mhNBf5yDyJa_8V8z9XnAvFj4j/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '6_Notice of BM_07.03.2023',
            link: 'https://drive.google.com/file/d/1aW0l72vzIS9_9tRlLM587vQfmIfQgq-j/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '6_Outcome of BM_13.03.2023',
            link: 'https://drive.google.com/file/d/1KMnuaKMzEz3o2-kfYCnFfEVldCQ8GMNo/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '7_Notice of BM_23.03.2023',
            link: 'https://drive.google.com/file/d/1tsTKLmC2KqAFXK7GPAwYAXlPMTFoUQWF/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '7_Outcome of BM_ 28.03.2023',
            link: 'https://drive.google.com/file/d/1ImuTnsDivwc9Pna1ptmjBVHi4xiJV4HG/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Notice of BM_12.05.2023',
            link: 'https://drive.google.com/file/d/1ccZrQXESEqHidFsP31v8KzV5UhaMUanS/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Outcome of BM_19.05.2023',
            link: 'https://drive.google.com/file/d/16KhfF9A0zvu79HSYyI4IuHdYEUVa-A2l/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Notice of BM_29.06.2023',
            link: 'https://drive.google.com/file/d/1XmWwrUsghqBZ8IA8zHMBnNE44yfDukm3/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Outcome of BM_03.07.2023',
            link: 'https://drive.google.com/file/d/1PIvGbP8LyWxFtr6h0u0moIASqT7GlPuK/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Outcome of BM_20.07.2023',
            link: 'https://drive.google.com/file/d/1gSJ3pHzn_iFT2CQG0Cpne6KKCthgZWZv/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Notice of BM_03.08.2023',
            link: 'https://drive.google.com/file/d/1OJWMFWPKDGi2Ul5cv_d6FYDa4dxpN3aW/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Outcome of BM_09.08.2023',
            link: 'https://drive.google.com/file/d/1Rlbkn5EDO9vO9niD2V6MWgP9t0CR-H3h/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '5_Notice of BM_01.11.2023',
            link: 'https://drive.google.com/file/d/1wzqekDv8W5Z9VLYQH3bsXYCpOpXRqk5-/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '5_Outcome of BM_08.11.2023',
            link: 'https://drive.google.com/file/d/1yBPdMTLKUVlpSsaWnJopJwdL3le-_wOL/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '6_Outcome of BM_08.12.2023',
            link: 'https://drive.google.com/file/d/14dHcXDh3xyzs4nEfqQtvk4XmZpdEikjR/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '7_Notice of BM_31.01.2024',
            link: 'https://drive.google.com/file/d/1PiHnb4rjMGmuxUZlj2CMLjB5JMwETXgX/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '7_Outcome of BM_07.02.2024',
            link: 'https://drive.google.com/file/d/1WY75MOtCTL-iEuWqa_RWnwvc344TYxoC/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '8_Outcome of BM_29.03.2024',
            link: 'https://drive.google.com/file/d/15TED1JMmNK7pXv2SUaZEBi-71fgpjWCL/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Intimation of BM_23.05.2024',
            link: 'https://drive.google.com/file/d/1aXw_iuyI7LKP1j_nZSgca0UeZqVVB03t/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Outcome of BM_29.05.2024',
            link: 'https://drive.google.com/file/d/1z5vzXY_4dbzHDjoSjfBAp4xr5l3s29x-/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Intimation of BM_31.07.2024',
            link: 'https://drive.google.com/file/d/139lJRkOXkn4rUZh0WGw5YpF1smPhBhaf/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Outcome of BM_06.08.2024',
            link: 'https://drive.google.com/file/d/1VP7r8-lIjIaSY1hUijJgyE5OUDUbrYT5/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '3_Intimation of BM_30.10.2024',
            link: 'https://drive.google.com/file/d/1nJM73kNjObWVdFJt9tKr4gvC4usdXdIQ/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '3_Outcome of BM_06.11.2024',
            link: 'https://drive.google.com/file/d/1A0_DTy5ofYYX1cKLHcBi--rAf8cfzGqA/view?usp=drive_link',
            category_id: 'board_meetings',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '26th AGM Intimation_03.09.2020',
            link: 'https://drive.google.com/file/d/10hPPynKLsog-oI3-pnwdBD5_PJHAoJwF/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '26th Annual Report Submission',
            link: 'https://drive.google.com/file/d/1nZrb0A8Gs2TAKZzcRhBz7rjXLct2TJh1/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '26th_AGM Proceedings',
            link: 'https://drive.google.com/file/d/1iSOvw8QLA6WH52IjvLXiBdUbKUCDg3Vj/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Book closure Intimation 04.09.2020',
            link: 'https://drive.google.com/file/d/1vFRNxivpqEQvm5TDO9UMeV4CsXD982b-/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2020-2021'
        },
        {
            id: '1',
            label: `Scrutinizer's report_AGM_28.09.2020`,
            link: 'https://drive.google.com/file/d/1uHrou5p24N2DDM4uOU0gNrJEkhVpc0yn/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '27th AGM Intimation',
            link: 'https://drive.google.com/file/d/12Zb0XM8jHtfhj3uGA8V1ntdAJdAl3Xvq/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '27th AGM Proceedings',
            link: 'https://drive.google.com/file/d/1xICyFK3ZPXxpXBOKRIY8WKsSVyewHVOq/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '27th Annual Report Submission',
            link: 'https://drive.google.com/file/d/1Fp0kJECr_30h52H9cnNCFw-s6_bWCUDe/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Book Closure Intimation_07.09.2021',
            link: 'https://drive.google.com/file/d/1GImWQwcy-OmuuWasoM7-8_oVMwG0xqGF/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: `Scrutinizer's report_AGM_30.09.2021`,
            link: 'https://drive.google.com/file/d/1WBJVpTS_GJ8QVXaX2VnonrD_jXjxxdao/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Corrigendum 2_EGM Notice_03.11.2021',
            link: 'https://drive.google.com/file/d/19eChBz_WqufnowOf3r1-PX3ujZZmM4zn/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Corrigendum_EGM Notice_03.11.2021',
            link: 'https://drive.google.com/file/d/14JmELKF3LUgAoqLvmlpiBApNrPmJQ7Fd/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'EGM Notice_03.11.2021',
            link: 'https://drive.google.com/file/d/1SswoSOZavEVULnfZj8soRHAtMJ7dis2q/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'EGM Proceedings',
            link: 'https://drive.google.com/file/d/1223auvYUX22OlpurlRvbQ_xVizPfTKDz/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: `Scrutinizer's Report_EGM_27.11.2021`,
            link: 'https://drive.google.com/file/d/1IYq1SFfrLbLslQd_BwfKDG26D1fotN0D/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'AGM & Book closure date change intimation_16.06.2023',
            link: 'https://drive.google.com/file/d/1CjZnMwXMxX0so6jFw8R0-32WDP1zcShH/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '28th AGM & e voting Intimation_06.08.2022',
            link: 'https://drive.google.com/file/d/1XUDIscAeb1AxpmHT2UYs8sSTASB8Y-Vd/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '28th AGM Proceedings',
            link: 'https://drive.google.com/file/d/1039QqTSLyhD0l1GDqgoe6rkZ1aZyvj0l/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Book closure Intimation_06.08.2022',
            link: 'https://drive.google.com/file/d/1iZp9KjXVlwQGyuVamrlQuFU41xzmniYR/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Corrigendum_Annual Report & Updated Annual Report FY_2021-22',
            link: 'https://drive.google.com/file/d/1KGqWvcmxGxP4mVkdRJm6LfTba0zt37M8/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: `Scrutinizer's report_AGM_30.09.2022`,
            link: 'https://drive.google.com/file/d/1jKZkj5OgbyCMmisw79R-ajczzb4hEOm0/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '29th AGM Intimation_06.07.2023',
            link: 'https://drive.google.com/file/d/1ncowFmBUvLMiIPKZvcnpBCOcTqJHeLr4/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '29th AGM Proceedings_28.07.2023',
            link: 'https://drive.google.com/file/d/1TbLfczqzhaB0wOKt4nZBMiebU96sZR3Q/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Book closure Intimation_06.07.2023',
            link: 'https://drive.google.com/file/d/1ZEJrjq9GM0lTnOLiXyD-KYR1H90WrdIT/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2023-2024'
        },
        {
            id: '1',
            label: `Scrutinizer's Report_AGM_28.07.2023`,
            link: 'https://drive.google.com/file/d/1usOZulWy6HkHMgG7fR0XOtxO_Nssqyen/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '30th AGM & E voting intimation',
            link: 'https://drive.google.com/file/d/1WaDwlHojb63Vo9Dv21bPfZMrU6u-_3GM/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '30th AGM Proceedings',
            link: 'https://drive.google.com/file/d/1hmGdjug6hPLi1z3xD-UxGGx5AGddoiVb/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Book Closure Intimation',
            link: 'https://drive.google.com/file/d/1md3hRnM4zyam3G48LbXmeT52RcYL6kLv/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Scrutinizer Report_AGM_29.06.2024',
            link: 'https://drive.google.com/file/d/1o7egJBRHxpuo9xDJkfg6FOIDj_IgV7OB/view?usp=drive_link',
            category_id: 'share_holder_meeting',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Postal Ballot Notice_11.03.2021.2021',
            link: 'https://drive.google.com/file/d/1fn29pX4ufrJgg3qT5q66pChzv0KFSgyO/view?usp=drive_link',
            category_id: 'postal',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Postal ballot outcome_13.04.2021.2021',
            link: 'https://drive.google.com/file/d/1A18qyBw-cPOwXfT4devoQjWfIpozlN77/view?usp=drive_link',
            category_id: 'postal',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Scrutinizer report_postal ballot_13.04.2021.2021',
            link: 'https://drive.google.com/file/d/18eFThNg51mzmoPWMOfbk0YtPOQliNojD/view?usp=drive_link',
            category_id: 'postal',
            year: '2020-2021'
        },
        {
            id: '1',
            label: 'Addendum to Postal Ballot Notice dated 07.05.2021',
            link: 'https://drive.google.com/file/d/1RMSl29O32ZSW_CYklI_GL18H0UTmnVNj/view?usp=drive_link',
            category_id: 'postal',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Notice_Postal ballot_07.05.2021',
            link: 'https://drive.google.com/file/d/190CIwed6WmYU7Fguwd_5rgiUUnXWWji4/view?usp=drive_link',
            category_id: 'postal',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Outcome_Postal ballot_07.05.2021',
            link: 'https://drive.google.com/file/d/1mmxv28njqLmJ5sli2VqGuVigB30yAAoP/view?usp=drive_link',
            category_id: 'postal',
            year: '2021-2022'
        },
        {
            id: '1',
            label: `Scrutinizer's report_Postal Ballot Notice_07.05.2021`,
            link: 'https://drive.google.com/file/d/1K1CH7fZwhnSq1NhnDg6Mx99zMkkr47-c/view?usp=drive_link',
            category_id: 'postal',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Intimation of Calender events for Postal ballot',
            link: 'https://drive.google.com/file/d/1iCtcBGi6CpftHY65YZM6u74wJwTICIL0/view?usp=drive_link',
            category_id: 'postal',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Notice _Postal Ballot_15.03.2023',
            link: 'https://drive.google.com/file/d/1I_Fr-TVvvlsjYJXCfqow-MefnxnEy9-y/view?usp=drive_link',
            category_id: 'postal',
            year: '2022-2023'
        },
        {
            id: '1',
            label: `Voting results & Scrutinizer's report_15.03.2023`,
            link: 'https://drive.google.com/file/d/1K6WVSunBjoO5b6yl-3ORT7Ud-FqHNZQw/view?usp=drive_link',
            category_id: 'postal',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Calender events Intimation_Postal Ballot',
            link: 'https://drive.google.com/file/d/1y5U9b-MFID2GRQ48a9RCDeSYETA0Pm8Q/view?usp=drive_link',
            category_id: 'postal',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Notice_Postal Ballot_10.08.2024',
            link: 'https://drive.google.com/file/d/1iozW--a58bwQwNADZFvt-z1rJzUmMjto/view?usp=drive_link',
            category_id: 'postal',
            year: '2024-2025'
        },
        {
            id: '1',
            label: `Voting Results & Scrutinizer's report_12.09.2024`,
            link: 'https://drive.google.com/file/d/1pUDTQYpwYQl44LBdYKQ1qqeL56sdDQTF/view?usp=drive_link',
            category_id: 'postal',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2019',
            link: 'https://drive.google.com/file/d/1yHxXeaGnZwvRDHw_pRwg8Wg379JBIm9x/view?usp=drive_link',
            category_id: 'demat',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2019',
            link: 'https://drive.google.com/file/d/16oZ3qv44wbgtI1txj7VODKwAU5NYhiJV/view?usp=drive_link',
            category_id: 'demat',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '4_Reg 74(5) Quarter ended_31.03.2020',
            link: 'https://drive.google.com/file/d/1Ng3VlxYcBt4t-c8tBZ7hINpNTF0EVNkd/view?usp=drive_link',
            category_id: 'demat',
            year: '2019-2020'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2020',
            link: 'https://drive.google.com/file/d/1iz_mT3m-Mw5EQuLwcBI4DHXyhIGKi7n7/view?usp=drive_link',
            category_id: 'demat',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2020',
            link: 'https://drive.google.com/file/d/18OVdfrOP1wYmDAyGVfd_gqQ4WTfDCX5P/view?usp=drive_link',
            category_id: 'demat',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '3_Reg 74(5)  Quarter ended_31.12.2020',
            link: 'https://drive.google.com/file/d/1-KWWKslek699hI0gLop6rLYp1K-RqrLR/view?usp=drive_link',
            category_id: 'demat',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '4_Reg 74(5)  Quarter ended_31.03.2021',
            link: 'https://drive.google.com/file/d/1d2CsWpcRk9f_K8EtB3NfrYQ4NBur3iaI/view?usp=drive_link',
            category_id: 'demat',
            year: '2020-2021'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2021',
            link: 'https://drive.google.com/file/d/14yuF4RIAxSL3M6Q3AbZm7D9ky1pmViaM/view?usp=drive_link',
            category_id: 'demat',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2021',
            link: 'https://drive.google.com/file/d/1MnKKU5gT7fIpqbGMizebsDZIX3n8BIUR/view?usp=drive_link',
            category_id: 'demat',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '3_Reg 74(5)  Quarter ended_31.12.2021',
            link: 'https://drive.google.com/file/d/177eTGcQg_OMCYK6_3DZ4VFieWs88hEq7/view?usp=drive_link',
            category_id: 'demat',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '4_Reg 74(5)  Quarter ended_31.03.2022',
            link: 'https://drive.google.com/file/d/1WTCvyaewD8z_s4r-rl4L48VbRTfjcjP5/view?usp=drive_link',
            category_id: 'demat',
            year: '2021-2022'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2022',
            link: 'https://drive.google.com/file/d/1zXmChOFatX5kRVQwKrvL2Jqt6C4Cojq7/view?usp=drive_link',
            category_id: 'demat',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2022',
            link: 'https://drive.google.com/file/d/1fyOODVB9UM0bMkn1ARbu09-Z71ZlBvcp/view?usp=drive_link',
            category_id: 'demat',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '3_Reg 74(5)  Quarter ended_31.12.2022',
            link: 'https://drive.google.com/file/d/1eXuR7jkHArP2MMzFUD95OJvOakZTDrMY/view?usp=drive_link',
            category_id: 'demat',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '4_Reg 74(5)  Quarter ended_31.03.2023',
            link: 'https://drive.google.com/file/d/1YTcOSYPlHeaMY8jhYY5LIpayYN03sI2c/view?usp=drive_link',
            category_id: 'demat',
            year: '2022-2023'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2023',
            link: 'https://drive.google.com/file/d/11RDGdfqz2pqXIWbAjYaeAvQ8C5neqJb8/view?usp=drive_link',
            category_id: 'demat',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2023',
            link: 'https://drive.google.com/file/d/1gXpLbq1RK5asJMkQKjCBS6raFQ7yR-Jl/view?usp=drive_link',
            category_id: 'demat',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '3_Reg 74(5)  Quarter ended_31.12.2023',
            link: 'https://drive.google.com/file/d/1HaVNJBo6SU69ieaXtTrKNX4fwhUgsm5S/view?usp=drive_link',
            category_id: 'demat',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '4_Reg 74(5)  Quarter ended_31.03.2024',
            link: 'https://drive.google.com/file/d/1nUdCh-iQwDhf3hGEIKg5iH3Hu1Jd2WUk/view?usp=drive_link',
            category_id: 'demat',
            year: '2023-2024'
        },
        {
            id: '1',
            label: '1_Reg 74(5)  Quarter ended_30.06.2024',
            link: 'https://drive.google.com/file/d/1yyq2ZTFdJAcCh7C5QjmeZ1DST8yLMkOF/view?usp=drive_link',
            category_id: 'demat',
            year: '2024-2025'
        },
        {
            id: '1',
            label: '2_Reg 74(5)  Quarter ended_30.09.2024',
            link: 'https://drive.google.com/file/d/1lpQu79OEEpVyrcYfHrbCUi11r-nerl71/view?usp=drive_link',
            category_id: 'demat',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'LF 2114_Rajesh Jain - 190723-0065-264606',
            link: 'https://drive.google.com/file/d/1_UQ_DFNPi-nexAtF-R3MwIpCvzqMzWcV/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 2114_Rajesh Jain - 250823-0001-267934',
            link: 'https://drive.google.com/file/d/1AGYQlJzyrwpY6YY08yRVhQxhjLA0STOY/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 2114_Rajesh Jain - Bse intimation_certificate loss - 02114',
            link: 'https://docs.google.com/document/d/14ABs-FNbCwSvcUrcf97xaBlguYi-z5pl/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 2114_Rajesh Jain - Pre-Intimation-Inward-267934',
            link: 'https://drive.google.com/file/d/1AVkNyekCmDcg30np_xg3fwy5Xdi4ABRR/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3042_LC Jain - 5475602',
            link: 'https://drive.google.com/file/d/1lAh2u7Cg6Ww6sczm3v6EY7SQOR6cS9MY/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3042_LC Jain - Bse intimation_certificate loss',
            link: 'https://docs.google.com/document/d/1sFB90ZfoVQTttOqkIvCaFjVJumUl9kEH/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3042_LC Jain - Bse intimation_certificate loss',
            link: 'https://drive.google.com/file/d/1FY6m0qAgix5MP6pPwIAK8XGAJ3lcvt56/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3042_LC Jain - FOLIO NO. 003042',
            link: 'https://docs.google.com/document/d/1oGwyjYDqxrIXp4IZr5k5bMtUO8_HfHd1/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - 111123-0028-283325',
            link: 'https://drive.google.com/file/d/1XW93bYQmV_zoe-2pLKroMAKzsw9siRsz/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - 150224-0092-289886',
            link: 'https://drive.google.com/file/d/1KQZvZd-mZcaQFG4vUQ7NrHQmFdepyzzN/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - 5966079',
            link: 'https://drive.google.com/file/d/1Eb2wHEuUCsZBWQ50vT0Df2A0_2qV9A1d/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Bse intimation_certificate loss',
            link: 'https://docs.google.com/document/d/1ENNkl1FTNEbWySEEc9R5Quy6MLASvlr3/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Bse intimation_certificate loss',
            link: 'https://drive.google.com/file/d/1FJ5Ug_71n03ILF5A3FYihw9tznApKJDX/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - CERTIFICATE NO. 0055932',
            link: 'https://docs.google.com/document/d/1gx_Q6_RLJ8nzr7yBT4_hwk3wGEepF-7T/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Cover Letter',
            link: 'https://docs.google.com/document/d/1oKCK6RYlUu2PQs0n8P_pMls2n1Y7yiAK/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Cover Letter',
            link: 'https://drive.google.com/file/d/1S-SfP0bwy9ndD2Sw1Vv9b8r9NH24P2KK/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Duplicate Certificate',
            link: 'https://drive.google.com/file/d/19dEKGTF7fuE0weJLeLREa6h5m1qq9SY-/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Kreon Finnancial Services Limited Mail - Fwd_ Duplicate issue_LF3413',
            link: 'https://drive.google.com/file/d/1WI86COQEaxpaeffYSS9GWBmpkfuVBnnk/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Pre-Intimation-Inward-266353',
            link: 'https://drive.google.com/file/d/1LuJG7rH3myUKFzrp9mnY8dhZ_I_fTXiQ/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3413_Kishan Gopal Kadel - Sh holder letter_3413',
            link: 'https://drive.google.com/file/d/1YUnMLgzc4Lhn0AEPjr7eZ9Yeai8cthvn/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - 003741_09.01.2024_Recd by Purva',
            link: 'https://drive.google.com/file/d/14cMmzxI1MAw9HQfroc_PtGo4_d5WWQE-/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - 003741_Sep2023_Recd by Purva',
            link: 'https://drive.google.com/file/d/1xBHV3fGOVVoMVBjXttsG8NZ2fwiTLfM2/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - 201223-0007-285770',
            link: 'https://drive.google.com/file/d/1l-SxwZqSOH-tWfhnOYCBDSlzwGsXi8aU/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - 530139_21122023',
            link: 'https://drive.google.com/file/d/1jhuHwwU0FPxLuwQnvyAQzd8gxaRw_Hyv/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - 6596906',
            link: 'https://drive.google.com/file/d/1nNXJ3Qunbo0HuvKM9n3Zf4wgTKOVbL9W/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Acknowledgement _Loss of certificate_XBRL',
            link: 'https://drive.google.com/file/d/1csJLD8WOkc5MJ1WYBL59qUcZ-wGO8V5A/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Bse intimation_certificate loss - 03741',
            link: 'https://docs.google.com/document/d/1kdinfiP3xdwcEHIVLDfVtus9FkkZxUzR/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Bse intimation_certificate loss - 03741',
            link: 'https://drive.google.com/file/d/1z7h7cMdlXygb3aw17tDsllmRlI6DsD8W/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Kreon Finnancial Services Limited Mail - 3741-Issue closed',
            link: 'https://drive.google.com/file/d/1bwqrbE6RnuRt68tYIZVMD7YfkmjqZOez/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Kreon Finnancial Services Limited Mail - INTIMATION OF LOSS OF SHARE CERTIFICATES FOLIO 3741 for 1000 shares',
            link: 'https://drive.google.com/file/d/1BOeGV3qnJzmq9gf0JwUVpwq2LxyspzD6/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Kreon Finnancial Services Limited Mail - Re_ Reminder 5',
            link: 'https://drive.google.com/file/d/1uCqZIqypQ0pTEndjqsyQV73raYXJEAR-/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Loss of Share Certificate and Issue of Duplicate Share Certificate or Letter of Confirmation',
            link: 'https://docs.google.com/spreadsheets/d/19R-ZOJv9SYHRCHIHRnxJ8yVZsolYu_xS/edit?usp=drive_link&ouid=115588786680372681840&rtpof=true&sd=true',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Loss of Share certificate_3741',
            link: 'https://drive.google.com/file/d/1wgmV6Rym6hCl3vtZobS_7D3QPKxFMuIy/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'LF 3741 Vijay kumar - Pre-Intimation-Inward-285770_RTA letter',
            link: 'https://drive.google.com/file/d/1oxMbm6RqLu6X11r9uQNi5StR7P8AbCz5/view?usp=drive_link',
            category_id: 'loss_issue',
            year: '#'
        },
        {
            id: '1',
            label: 'Statutory Auditor Appt_BSE Intimation_17.01.2023',
            link: 'https://drive.google.com/file/d/1FS5czONp7cbwVY4FPhKe9-UFh2XbQyQq/view?usp=drive_link',
            category_id: 'announcement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Statutory Auditor resign_BSE Intimation_10.01.2023',
            link: 'https://drive.google.com/file/d/12XNWyymBciMC6YodqVKR3QDKmctW3jcC/view?usp=drive_link',
            category_id: 'announcement',
            year: '2022-2023'
        },
        {
            id: '1',
            label: 'Announcement Under Reg 30_Auditor Appt_29.07.2023',
            link: 'https://drive.google.com/file/d/1W-JvGXgfN8bAyRt0p7wDsRDSrFmpI3HA/view?usp=drive_link',
            category_id: 'announcement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Announcement Under Reg 30_Change in Directors_29.03.2024',
            link: 'https://drive.google.com/file/d/1a8OqZGBSmeHq7AYCqMA7d0Yv7zFKkgo6/view?usp=drive_link',
            category_id: 'announcement',
            year: '2023-2024'
        },
        {
            id: '1',
            label: 'Announcement Under Reg 30_Change in Directors_06.08.2024',
            link: 'https://drive.google.com/file/d/1LzjBrO23Lg-QC0xnMkRh-sHGPlgB3_YD/view?usp=drive_link',
            category_id: 'announcement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Announcement Under Reg 30_Change in Directors_12.09.2024',
            link: 'https://drive.google.com/file/d/1Ir2tB5HVCNnxF_g2_L0Fu9HF8MUsspD1/view?usp=drive_link',
            category_id: 'announcement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Announcement Under Reg 30_Change in Directors_29.06.2024',
            link: 'https://drive.google.com/file/d/1qixSHxQHay8mCQyJ7Hve03nae4YaE2AX/view?usp=drive_link',
            category_id: 'announcement',
            year: '2024-2025'
        },
        {
            id: '1',
            label: 'Clarification on Price Movement_05.07.2022',
            link: 'https://drive.google.com/file/d/1w5rwJDhUjswZ-GplD-D2uQ4voZDkZj6g/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Newspaper Ad_Notice for proposed Transfer of Shares_17.07.2019',
            link: 'https://drive.google.com/file/d/1YIe6DdLDX9DJvqmGW5vH2sp7yQWw9pbI/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Credit rating - Credit Rating 15.09.2022',
            link: 'https://drive.google.com/file/d/1RNC-_6aI4_MO6yExI7ATlH1qUIzdD7gI/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Credit rating - Withdrawal of credit rating by Brickworks Ratings India Private Limited_03.04.2024',
            link: 'https://drive.google.com/file/d/1i_Ag6MyxQz3k-rB4U6tCtymKtSKeiJRy/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Investor Queries - Generating awareness on availability of Dispute Resolution Mechanism at Stock Exchanges',
            link: 'https://drive.google.com/file/d/1ultWsxavaOR80zuUQICz4CD_q_5pIOFO/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Investor Queries - Information for holders of physical securities',
            link: 'https://drive.google.com/file/d/1_nKcMeXMwV3PLD99qkBg7QxDw5H3SrzN/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
        {
            id: '1',
            label: 'Investor Queries',
            link: 'https://drive.google.com/file/d/1MDO8sehoiqZSRF33RqGN1VNkGwatmfgi/view?usp=drive_link',
            category_id: 'miscellaneous',
            year: '#'
        },
    ])
    const [Records, setRecords] = useState([...RecordsOrginal])

    const [SelectedCategory, setSelectedCategory] = useState('policies_codes')
    const [SelectedYear, setSelectedYear] = useState('2020-2021')

    const [SearchValue, setSearchValue] =useState('')

    const handleSearchInput = (e)=>{
        let value = e.target.value
        setSearchValue(value)

        let records = [...RecordsOrginal]

        records = records.filter(r=> r.label.toLocaleLowerCase().includes(String(value).trim().toLocaleLowerCase()))

        setRecords(records)
    }

    const handleSelectCategory = (category)=>{

        setSelectedCategory(category.id)

        filterRecords(category.id, SelectedYear)
    }
    const handleSelectYear = (year)=>{

        setSelectedYear(year)

        filterRecords(SelectedCategory, year)
    }

    const filterRecords = (category, year)=>{

        let records = [...RecordsOrginal]

        if(category)records = records.filter(r=> r.category_id == category)
        if(year) {
            let _records = records.filter(r=> r.year =='#' ? true : r.year == year)
            
            if(!_records.length && records.length){
                setSelectedYear(records[0]?.year)
            }
            else {
                records = _records
            }
        }

        setRecords(records)
    }

    const handleYearChanger = (type)=>{

        let selected_year_idx = YearsList.indexOf(SelectedYear)
    
        if(selected_year_idx == -1) selected_year_idx= 0

        console.log(selected_year_idx);
        
        
        let year = SelectedYear

        if(type == '+' && YearsList[selected_year_idx + 1]) year = YearsList[selected_year_idx + 1]
        else if(type == '-' && YearsList[selected_year_idx - 1])  year = YearsList[selected_year_idx - 1]

        setSelectedYear(year)

        filterRecords(SelectedCategory, year)
    }

    return (
        <div className="library-container-main">
            <div className="library-container-content">
                <div className="library-search-main">
                    <div className="search-input">
                        <input 
                            type="text" 
                            placeholder='Enter your search'
                            value={SearchValue}
                            onChange={handleSearchInput}
                        />
                        <div 
                            className="search-input-icon" 
                            dangerouslySetInnerHTML={{__html: Icons.search}}
                        ></div>
                    </div>
                </div>
                <div className="library-content-wrapper">
                    <div className="library-category-main">
                        <div className="category-items">
                            {Categories.map((category, idx)=>(
                                <div 
                                    key={`library-category-${idx}`}
                                    className={`category-item ${category.id == SelectedCategory ? 'category-item-selected': ''}`}
                                    onClick={()=> handleSelectCategory(category)}
                                >
                                    <div className="item-icon" dangerouslySetInnerHTML={{__html: category.icon}}></div>
                                    <div className="item-label">{category.label}</div>
                                </div>
                            ))}
                           
                        </div>
                    </div>
                    <div className="library-records-main">
                        <div className="library-years-filter">
                        <div 
                            className="filter-arrow-left" 
                            dangerouslySetInnerHTML={{__html: Icons.arrow}}
                            onClick={()=> handleYearChanger('-')}
                        ></div>
                        <div className="filter-years">
                        <div className="filter-years-items">
                            {YearsList.map((year, idx)=>(
                                <div 
                                    className={`filter-year ${SelectedYear == year ? 'filter-year-selected':''}`}
                                    onClick={()=> handleSelectYear(year)}
                                >{year}</div>
                            ))}
                        </div>
                        </div>
                        <div 
                            className="filter-arrow-right" 
                            dangerouslySetInnerHTML={{__html: Icons.arrow}} 
                            onClick={()=> handleYearChanger('+')}    
                        ></div>
                        </div>
                        <div className="library-records-container">
                            <div className="records-items">
                                {Records.map((record, idx)=>(
                                    <a
                                        key={`library-record-item-${idx}`} 
                                        className="records-item"
                                        href={ReverseProxy['proxyUrl'] +record.link}
                                        target={'_blank'}
                                    >
                                        <div className="label">{record.label}</div>
                                        <div className="icon" dangerouslySetInnerHTML={{__html: Icons.arrow_right_up}}></div>
                                    </a>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrarySection;
