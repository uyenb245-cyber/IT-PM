/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LibraryProvider } from './context/LibraryContext';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Circulation from './pages/Circulation';
import CatalogInsights from './pages/CatalogInsights';
import Compliance from './pages/Compliance';
import Members from './pages/Members';
import DataIntegrity from './pages/DataIntegrity';
import AddBook from './pages/AddBook';
import AddMember from './pages/AddMember';

export default function App() {
  return (
    <LibraryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/circulation" element={<Circulation />} />
            <Route path="/catalog" element={<CatalogInsights />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/members" element={<Members />} />
            <Route path="/integrity" element={<DataIntegrity />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/add-member" element={<AddMember />} />
          </Routes>
        </Layout>
      </Router>
    </LibraryProvider>
  );
}
