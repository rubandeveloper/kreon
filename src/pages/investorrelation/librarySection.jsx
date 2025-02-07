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
            id: 'loss',
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

    const getYearList = (limit, range) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        
        const yearList = [];
        
        for (let i = 0; i < limit; i++) {
            const startYear = currentYear - i - range + 1;  // Adjusting for the range
            const endYear = startYear + range - 1;  // End year of the range
            yearList.push(`${startYear}-${endYear}`);
        }
    
        return yearList.reverse();
    };
    
    const [RecordsOrginal, setRecordsOrginal] = useState([
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
        {
            id: '1',
            label: 'Trading window closure Quarter Ended 30.06.2020',
            link: '',
            category_id: 'policies_codes',
            year: '2021-2022'
        },
    ])
    const [Records, setRecords] = useState([...RecordsOrginal])

    const [SelectedCategory, setSelectedCategory] = useState('policies_codes')
    const [SelectedYear, setSelectedYear] = useState('2021-2022')

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
    }
    const handleSelectYear = (year)=>{

        setSelectedYear(year)
    }

    const filterRecords = (category, year)=>{

        let records = [...RecordsOrginal]

        if(category)records = records.filter(r=> r.category_id == category)
        if(year)records = records.filter(r=> r.year == year)

        setRecords(records)
    }

    useEffect(()=>{

        if(SelectedCategory || SelectedYear)filterRecords(SelectedCategory, SelectedYear)

    }, [SelectedCategory, SelectedYear])

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
                        <div className="filter-arrow-left" dangerouslySetInnerHTML={{__html: Icons.arrow}} ></div>
                        <div className="filter-years">
                            {getYearList(4, 2).map((year, idx)=>(
                                <div 
                                    className={`filter-year ${SelectedYear == year ? 'filter-year-selected':''}`}
                                    onClick={()=> handleSelectYear(year)}
                                >{year}</div>
                            ))}
                        </div>
                        <div className="filter-arrow-right" dangerouslySetInnerHTML={{__html: Icons.arrow}} ></div>
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
