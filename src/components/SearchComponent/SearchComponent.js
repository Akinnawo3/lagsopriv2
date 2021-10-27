import React, {useEffect, useState} from 'react'
import {Input} from "reactstrap";

const SearchComponent = ({getSearchedData, getPreviousData, setCurrentPage, getCount, placeHolder}) => {
    const [searchData, setSearchData] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    useEffect(() => {
        if(focused && searchData.length > 2) {
            const delayDebounceFn = setTimeout(() => {
                setIsSearch(true)
                setCurrentPage(1)
                getSearchedData(searchData)
            }, 2000)
            return () => clearTimeout(delayDebounceFn)
        }else if(focused && !searchData && isSearch) {
            setCurrentPage(1)
            getPreviousData()
            getCount()
            setIsSearch(false)
        }
    }, [searchData, focused])

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };
    return (
        <div className="search-wrapper">
            <Input onFocus={onFocus} onBlur={onBlur} type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder={placeHolder ? placeHolder : "name, email, phone no"} autoComplete='off' />
        </div>
    )
}

export default SearchComponent
