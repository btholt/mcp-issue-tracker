import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, ProtectedRoute } from "@/components/auth";
import { ToastProvider } from "@/contexts/ToastContext";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import IssueListPage from "@/pages/IssueListPage";
import IssueDetailPage from "@/pages/IssueDetailPage";
import CreateIssuePage from "@/pages/CreateIssuePage";
import EditIssuePage from "@/pages/EditIssuePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/issues"
                element={
                  <ProtectedRoute>
                    <IssueListPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/issues/new"
                element={
                  <ProtectedRoute>
                    <CreateIssuePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/issues/:id"
                element={
                  <ProtectedRoute>
                    <IssueDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/issues/:id/edit"
                element={
                  <ProtectedRoute>
                    <EditIssuePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
