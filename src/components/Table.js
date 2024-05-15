import React, { useState } from "react";
import TableRow from "./TableRow";

export default function Table({ data ,searchQuery}) {
    const [columns, setColumns] = useState({
        founded: true,
        building: true,
        stack: true,
        oss: true,
        activity: true,
        offices: true,
        compensation: true,
        type: true,
        employment: true,
    });

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (columnKey) => {
        if (sortBy === columnKey) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(columnKey);
            setSortOrder("asc");
        }
    };
    const getValueForSorting = (value) => {
        if (Array.isArray(value)) {
            return value.map(item => item.name).join(", ");
        } else if (typeof value === "boolean") {
            return value ? "1" : "0";
        }
        else if (typeof value === "object") {
            return value.name;
        }
        return value;
    };

    const sortedData = sortBy ? data.slice().sort((a, b) => {
        const valueA = getValueForSorting(a[sortBy]);
        const valueB = getValueForSorting(b[sortBy]);

        if (valueA < valueB) {
            return sortOrder === "asc" ? -1 : 1;
        }
        if (valueA > valueB) {
            return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
    }) : data;



    const [menuVisible, setMenuVisible] = useState(false);

    const toggle = columnKey => {
        setColumns(prevColumns => ({
            ...prevColumns,
            [columnKey]: !prevColumns[columnKey]
        }));
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="app-table">
            <table className="table">
                <thead>
                    <tr>
                        <th className="header-cell">
                            <div className="index" />
                        </th>
                        <th className={`header-cell ${sortBy === "company" && "selected"}`}>
                            <div className="header-content" onClick={() => handleSort("company")}>
                                Company {<span className={`arrow ${sortOrder} ${sortBy === "company" && "selected"}`} />}
                            </div>
                        </th>
                        {columns.founded && (
                            <th className={`header-cell ${sortBy === "founded" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("founded")}>
                                    Founded {<span className={`arrow ${sortOrder} ${sortBy === "founded" && "selected"}`} />}
                                </div>
                            </th>
                        )}
                        {columns.building && (
                            <th className={`header-cell ${sortBy === "building" && "selected"}`} >
                                <div className="header-content" onClick={() => handleSort("building")}>Building {<span className={`arrow ${sortOrder} ${sortBy === "building" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.stack && (
                            <th className={`header-cell ${sortBy === "stack" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("stack")}>Stack {<span className={`arrow ${sortOrder} ${sortBy === "stack" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.oss && (
                            <th className={`header-cell ${sortBy === "oss" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("oss")}>OSS {<span className={`arrow ${sortOrder} ${sortBy === "oss" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.activity && (
                            <th className={`header-cell ${sortBy === "activity" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("activity")}>Activity {<span className={`arrow ${sortOrder} ${sortBy === "activity" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.offices && (
                            <th className={`header-cell ${sortBy === "offices" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("offices")}>Offices {<span className={`arrow ${sortOrder} ${sortBy === "offices" && "selected"}`} />}</div>
                            </th>
                        )}
                        <th className={`header-cell ${sortBy === "hiring" && "selected"}`}>
                            <div className="header-content" onClick={() => handleSort("hiring")}>Hiring {<span className={`arrow ${sortOrder} ${sortBy === "hiring" && "selected"}`} />}</div>
                        </th>
                        {columns.compensation && (
                            <th className={`header-cell ${sortBy === "compensation" && "selected"}`}>
                                <div className="header-content" onClick={() => handleSort("compensation")}>Compensation {<span className={`arrow ${sortOrder} ${sortBy === "compensation" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.type && (
                            <th className={`header-cell ${sortBy === "type" && "selected"}`} >
                                <div className="header-content" onClick={() => handleSort("type")}>Type {<span className={`arrow ${sortOrder} ${sortBy === "type" && "selected"}`} />}</div>
                            </th>
                        )}
                        {columns.employment && (
                            <th className={`header-cell ${sortBy === "employment" && "selected"}`} >
                                <div className="header-content" onClick={() => handleSort("employment")}>Employment {<span className={`arrow ${sortOrder} ${sortBy === "employment" && "selected"}`} />}</div>
                            </th>
                        )}
                        <th className="header-cell">
                            <div className="header-content" onClick={toggleMenu}>...</div>
                            {menuVisible && (
                                <div className="menu-container">
                                    <div className="menu">
                                        {Object.keys(columns).map(item => (


                                            <li>
                                                <div key={item}>
                                                    <input
                                                        type="checkbox"
                                                        checked={columns[item]}
                                                        onChange={() => toggle(item)}
                                                    />
                                                    <span>{item}</span>
                                                </div>
                                            </li>

                                        ))}
                                    </div>
                                </div>
                            )}
                        </th>
                        
                    </tr>
                </thead>
                
                <tbody className="table-body">
                    {sortedData.map((attributes, index) => (
                        <TableRow {...attributes} columns={columns} key={index} sortBy={sortBy} searchQuery={searchQuery} />
                    ))}
                </tbody>
            </table>

        </div>
    );
}
