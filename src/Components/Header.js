import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

const Header = ({ setSearchQuery }) => {
  return (
    <div className="bg-[#490000] p-4 text-white flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-20 items-center space-y-4 md:space-y-0">
      <div className="flex space-x-4 md:space-x-8 lg:space-x-20 justify-center">
        <span>Music</span>
        <span>Podcast</span>
        <span>Live</span>
        <span>Radio</span>
      </div>
      <div className="w-full md:w-auto">
        <TextField
          variant="outlined"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
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
            width: { xs: "100%", md: "300px", lg: "400px" },
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
