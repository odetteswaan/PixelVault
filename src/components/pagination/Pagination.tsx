import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";

const Wrapper = styled(Box)(({}) => ({
   "& .navigationContainer": {
       display: 'flex',
       justifyContent: 'space-between',
       marginTop: '30px',
       width: '250px'
   },
   "& .nav": {
       height: '42px',
       width: "42px",
       borderRadius: '5px',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       border: '1px solid #E8E8E8',
       cursor: 'pointer',
      "&[data-active='true']": {
      backgroundColor: "#5900B3",
      color: "white",
    }
   },
   "& .btnContainer": {
       width: "95%",
       display: 'flex',
       justifyContent: "flex-end",
       marginTop: "30px"
   },
}));

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
   const [currentRange, setCurrentRange] = useState([1, 2, 3]);

   const handleIncrement = () => {
      if (currentRange[2] < totalPages) {
         setCurrentRange(currentRange.map((page) => page + 1));
         onPageChange(currentPage + 1); 
      }
   };

   const handleDecrement = () => {
      if (currentRange[0] > 1) {
         setCurrentRange(currentRange.map((page) => page - 1));
         onPageChange(currentPage - 1);
      }
   };

   const handlePageChange = (page: number) => {
      onPageChange(page);
      if (page <= 2) {
         setCurrentRange([1, 2, 3]);
      } else if (page >= totalPages - 1) {
         setCurrentRange([totalPages - 2, totalPages - 1, totalPages]);
      } else {
         setCurrentRange([page - 1, page, page + 1]);
      }
   };

   return (
      <Wrapper>
         <Box className="btnContainer">
            <Box className="navigationContainer">
               <Box className="nav" onClick={handleDecrement}>
                  {"<"}
               </Box>

               {currentRange.map((page) => (
                  page <= totalPages && (
                     <Box
                        key={page}
                        className="nav"
                        onClick={() => handlePageChange(page)}
                        data-active={currentPage === page}
                     >
                        {page}
                     </Box>
                  )
               ))}

               <Box className="nav" onClick={handleIncrement}>
                  {">"}
               </Box>
            </Box>
         </Box>
      </Wrapper>
   );
};

export default Pagination;
