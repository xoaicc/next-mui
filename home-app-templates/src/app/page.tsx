import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const HomePage = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Typography className="text-center mb-4">
        Welcome to MUI with Tailwind CSS!
      </Typography>
      <div className="flex justify-center">
        <Button color="primary">Hello World</Button>
      </div>
    </div>
  );
};

export default HomePage;
