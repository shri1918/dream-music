import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

const Header = () => {
  return (
    <div className="bg-[#490000] p-4 text-white justify-center flex space-x-20 align-middle items-center">
      <div className="flex space-x-20 justify-center">
        <span>Music</span>
        <span>Podcast</span>
        <span>Live</span>
        <span>Radio</span>
      </div>
      <div className="">
        <TextField
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
            style: { color: "white" },
          }}
          sx={{
            backgroundColor: "#2C0000",
            color: "white",
            borderRadius: "50px",
            width: "400px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#2C0000",
                borderRadius: "50px",
              },
              "&:hover fieldset": {
                borderColor: "#2C0000",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#2C0000",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Header;
