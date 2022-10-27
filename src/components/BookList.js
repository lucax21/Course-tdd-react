import { Typography } from "@mui/material";

export const BookList = ({books, loading, error}) => {
    return (
        <div data-test="book-list">
        {
          books.map(x => (
            <div className="book-item">
              <Typography variant="h5" component="h5" data-test="heading">
                {x.name}
              </Typography>
            </div>
          ))
        } 
      </div>
      )
}