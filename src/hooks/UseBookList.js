import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useBookList = (initial) => {
  const [books, setBooks] = useState(initial)
  const [loading, setLoading]  = useState(false)
  const [error, setError]  = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(false)
      try{
        const response = await api.get('books')
        setBooks(response.data)
      }catch(err){
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return {books, loading, error}
}

