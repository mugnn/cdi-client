import './index.css'

const NavLoc = (props) => {
  
  const changeLoc = (loc) => {
    props.loc(loc);
  }

  return (
    <div className="nav_loc">
      <div className={ props.currentLoc === 'todos' ? "loc_route_button __selected_loc l" : "loc_route_button" } onClick={() => changeLoc('todos')}>
        TODOS
      </div>
      <div className={ props.currentLoc === 'CENPES - IFO' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('CENPES - IFO')}>
        CENPES (CIPD, IFO, IFO2)
      </div>
      <div className={ props.currentLoc === 'EDISEN - SNDO' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDISEN - SNDO')}>
        EDISEN (SNDO)
      </div>
      <div className={ props.currentLoc === 'EDIVIT - BVO' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDIVIT - BVO')}>
        EDIVIT (BVO)
      </div>
      <div className={ props.currentLoc === 'EDIHB - MNA' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDIHB - MNA')}>
        EDIHB (MNA)
      </div>
      <div className={ props.currentLoc === 'IMBOASSICA - ICA' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('IMBOASSICA - ICA')}>
        IMBOASSICA (ICA)
      </div>
      <div className={ props.currentLoc === 'IMBETIBA - MCE' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('IMBETIBA - MCE')}>
        IMBETIBA (MCE)
      </div>
      <div className={ props.currentLoc === 'EDISE - RJO' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDISE - RJO')}>
        EDISE (RJO)
      </div>
      <div className={ props.currentLoc === 'EDISA - VLG' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDISA - VLG')}>
        EDISA (VLG)
      </div>
      <div className={ props.currentLoc === 'TORRE PITUBA - SDR' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('TORRE PITUBA - SDR')}>
        TORRE PITUBA (SDR)
      </div>
      <div className={ props.currentLoc === 'EDIRN - NTL' ? "loc_route_button __selected_loc" : "loc_route_button" } onClick={() => changeLoc('EDIRN - NTL')}>
        EDIRN (NTL)
      </div>
      <div className={ props.currentLoc === 'EDIBRA - BSA' ? "loc_route_button __selected_loc r" : "loc_route_button" } onClick={() => changeLoc('EDIBRA - BSA')}>
        EDIBRA (BSA)
      </div>
    </div>
  )
}

export default NavLoc;

