import { Homepage } from './Homepage';
import { BookingPage } from './BookingPage';
import { Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <main>
      <Routes>
         <Route path="/" element={<Homepage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}
export default Main;
