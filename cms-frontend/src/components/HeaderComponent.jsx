import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-dark bg-dark"> {/* "nav=tag", "className=attribute", "Boostrap class= navbar navbar-dark bg-dark" */}
                <a className="navbar-brand" href="#">Client Management System</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent