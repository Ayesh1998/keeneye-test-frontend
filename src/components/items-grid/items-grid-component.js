import GridSingleItem from "../grid-single-item/grid-single-item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MaterialSelectDropdown from "../material-select-dropdown/material-select-dropdown";

//Grid component for items
const GridComponent = () => {
  const productsModified = useSelector((state) => state.products.productsModified);
  const [modifiedOriginals, setModifiedOriginals] = useState([]);
  const [materials, setMaterials] = useState(["All"]);
  const [selectedOption, setSelectedOption] = useState("Select");

  //setting the products that should display in view when products value get changed
  useEffect(() => {
    if (selectedOption === "Select" || selectedOption === "All") {
      setModifiedOriginals(productsModified);
    } else {
      setModifiedOriginals(
        productsModified.filter((item) => item.material === selectedOption)
      );
    }
    let arr = ["All"];
    productsModified.map((product) => {
      if (!arr.includes(product.material)) {
        arr.push(product.material);
      }
    });
    setMaterials(arr);
  }, [productsModified]);

  //handling the material select dropdown values
  const handleMaterialDropdown = (e) => {
    setSelectedOption(e);
    if (e === "All") {
      setModifiedOriginals(productsModified);
    } else {
      setModifiedOriginals(
        productsModified.filter((item) => item.material === e)
      );
    }
  };

  return (
    <div className="row">
      <MaterialSelectDropdown
        selectedOption={selectedOption}
        materials={materials}
        handleMaterialDropdown={handleMaterialDropdown}
      />
      {modifiedOriginals.map((item) => (
        <GridSingleItem
          key={item?.id}
          {...item}
          item={item}
        />
      ))}
    </div>
  );
};

export default GridComponent;
