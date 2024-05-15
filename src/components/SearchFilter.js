import React, { useState, useEffect } from "react";

export default function SearchFilter({ data ,setData,searchQuery ,setSearchQuery}) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterData = () => {
      const newData = data.filter(item => {
        return Object.values(item).some(field => {
          if (typeof field === "object" && field !== null) {
            return Object.values(field).some(value =>
              typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase())
            );
          } else if (typeof field === "string") {
            return field.toLowerCase().includes(searchQuery.toLowerCase());
          }
          return false;
        });
      });
      setFilteredData(newData);
      setData(newData);
    };

    if (searchQuery.trim() === "") {
      setFilteredData(data);
    } else {
      filterData();
    }
  }, [searchQuery, data]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  

  return (
    <>
      <div className="search-filter-container">
        <div className="search-form">
          <form>
            <div className="form-group">
              <label htmlFor="query">What do you want to work with?</label>
              <div className="input-container">
                <i className="app-icon fa fa-search" aria-hidden="true" />
                <input
                  id="query"
                  name="query"
                  type="text"
                  autoComplete="off"
                  maxLength="64"
                  required
                  placeholder="Rust, Solidity, React, Kubernetes…"
                  autoFocus
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button type="submit">search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
