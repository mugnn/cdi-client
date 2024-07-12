import './index.css'

const NavLoc = (props) => {
  
  const changeLoc = (loc) => {
    props.loc(loc);
  }

  return (
    <div className="nav_loc">
      <div className="loc_route_button" onClick={() => changeLoc('todos')}>
        TODOS
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('CENPES - IFO')}>
        CENPES (IFO, IFO2)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDISEN - SNDO')}>
        EDISEN (SNDO)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDIVIT - BVO')}>
        EDIVIT (BVO)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDIHB - MNA')}>
        EDIHB (MNA)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('IMBOASSICA - ICA')}>
        IMBOASSICA (ICA)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('IMBETIBA - MCE')}>
        IMBETIBA (MCE)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDISE - RJO')}>
        EDISE (RJO)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDISA - VLG')}>
        EDISA (VLG)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('TORRE PITUBA - SDR')}>
        TORRE PITUBA (SDR)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDIRN - NTL')}>
        EDIRN (NTL)
      </div>
      <div className="loc_route_button" onClick={() => changeLoc('EDIBRA - BSA')}>
        EDIBRA (BSA)
      </div>
    </div>
  )
}

export default NavLoc;

