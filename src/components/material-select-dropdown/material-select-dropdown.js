import { Dropdown } from "react-bootstrap";
import "./material-select-dropdown.css";

//MaterialSelectDropdown component
const MaterialSelectDropdown = ({ materials, handleMaterialDropdown, selectedOption }) => {
  return (
    <div className="row mt-4 mb-2">
      <span className="col-2 ml-2 select-material-span">
        Select material :
      </span>
      <Dropdown className="col-2" onSelect={(e) => handleMaterialDropdown(e)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {materials.map((material, index) => {
            return (
              <Dropdown.Item eventKey={material} key={index} href="#/action-1">
                {material}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MaterialSelectDropdown;
