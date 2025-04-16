import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getFellowById,
  updateFellowName,
  deleteFellow,
} from "../adapters/fellowAdapters";

const FellowDetails = () => {
  const [fellow, setFellow] = useState({});
  const [newFellowName, setNewFellowName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const doFetch = async () => {
      const [foundFellow, error] = await getFellowById(id);
      setFellow(foundFellow);
    };
    doFetch();
  }, []);

  const handleDeleteFellow = async () => {
    await deleteFellow(id);
    navigate("/");
  };

  const handleUpdateFellow = async (e) => {
    e.preventDefault();

    const [updatedFellow, error] = await updateFellowName(id, newFellowName);
    setFellow(updatedFellow);
    setNewFellowName("");
  };

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Fellow Details</h1>
      <p>Name: {fellow.name}</p>
      <p>Id: {fellow.id}</p>
      <form onSubmit={handleUpdateFellow}>
        <label htmlFor="name">Update Fellow Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newFellowName}
          onChange={(e) => setNewFellowName(e.target.value)}
          placeholder="New Name"
        />
      </form>
      <button onClick={handleDeleteFellow} className="danger">
        Delete Fellow
      </button>
    </>
  );
};

export default FellowDetails;
