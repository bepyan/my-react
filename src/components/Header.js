import React from 'react'

const Header = () => {
    const hookList = ["useInput", "useAxios"];

    const onLogo = () => window.location.href = '/'

    return (
        <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
            <h1 onClick={onLogo} style={{ cursor: "pointer" }}>
                Hook Master
            </h1>

            {
                hookList.map(item =>
                    <a href={`/${item}`} key={item} style={{ margin: '0.5rem' }}>
                        {item}
                    </a>)
            }

        </div>
    )
}

export default Header;
