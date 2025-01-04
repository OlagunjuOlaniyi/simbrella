import axios from "axios";

const API_BASE = "https://6777ecda80a79bf9190363a1.mockapi.io/api/v1";

export const fetchUserData = () => axios.get(`${API_BASE}/user`);
