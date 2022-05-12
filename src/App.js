import "./App.css";
import { Hub } from "aws-amplify";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  NewHomes,
  UpdateHome,
  DeleteHome,
  NavBar,
  AddHome,
  AddHomeButton,
} from "./ui-components";

function App() {
  const [updateHome, setUpdateHome] = useState();
  const [showDeleteHome, setShowDeleteHome] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Hub.listen("ui", ({ payload }) => {
      if (payload.event === "actions:datastore:delete:finished") {
        setShowDeleteHome();
      }
    });
  }, [setShowDeleteHome]);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //this always conflicts with the generated Update functionality
  //Hence setting placeholder to the values
  //If setting fields value, it breaks - no way to edit the field :()

  const addHomeOverrides = {
    Button: {
      onClick: () => {
        //set forShow to true or false
        setShowForm(!showForm);
      },
      children: showForm ? "Hide Button" : "Add Home",
    },
  };
  const populateFormOverride = {
    TextField29766922: {
      placeholder: address,
    },
    TextField29766923: {
      placeholder: price,
    },
    TextField29766924: {
      placeholder: imageUrl,
    },
    Button31772688: {
      src: updateHome == null ? {} : "hello",
    },
  };
  return (
    <div className='App'>
      <NavBar width={"100vw"} />
      <header className='App-header'>
        <AddHomeButton
          overrides={addHomeOverrides}
          style={{ textAlign: "left", margin: "1rem" }}
        />
        {showForm && (
          <AddHome
            home={updateHome}
            overrides={populateFormOverride}
            width={{ small: "300px", large: "600px", xl: "800px" }}
            style={{ textAlign: "left", margin: "1rem" }}
          />
        )}

        <div>
          {showDeleteHome && (
            <div className='modal'>
              <DeleteHome home={showDeleteHome} />
            </div>
          )}
          <NewHomes
            isPaginated
            itemsPerPage={3}
            overrideItems={({ item }) => ({
              //override a pro for a specific element within a collection item
              overrides: {
                Button31592722: {
                  onClick: () => {
                    setUpdateHome(item);
                    setAddress(item.address);
                    setPrice(item.price);
                    setImageUrl(item.image_url);
                  },
                },
                Button31592727: {
                  onClick: () => {
                    setShowDeleteHome(item);
                  },
                },
              },
            })}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
