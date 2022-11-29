import React, { useEffect } from "react";
import "./App.scss";
import Home from "../components/Pages/Home";
import HomeAdmin from "../components/Pages/HomeAdmin";
import ProfileAdmin from "../components/Pages/ProfileAdmin";
import List from "../components/Pages/List";
import New from "../components/Pages/New";
import Edit from "../components/Pages/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { userColumns, userRows } from "../db/datatablesource";
import { productInputs, userInputs } from "../db/formSource";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";

const App = () => {
  const { language } = useSelector((state) => state.musicReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (language === null || language.includes("any")) {
      dispatch(setPlaylist(musicDB));
    } else if (language.includes("hindi")) {
      alert("No hindi tracks available");
    } else {
      let x = musicDB.filter(
        (item) => item.lang && language.includes(item.lang.toLowerCase())
      );
      dispatch(setPlaylist(x));
    }
  }, [dispatch, language]);

  return (
    <ThemeContext.Provider value={themes.light}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home">
                <Route index element={<Home />} />
                <Route path="about" element={<Home />} />
                <Route path="add" element={<Home />} />
                <Route path="search" element={<Home />} />
                <Route path="profile" element={<Home />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="admin">
                <Route index element={<HomeAdmin />} />
                <Route path="users">
                  <Route
                    index
                    element={
                      <List
                        title="users"
                        dataRows={userRows}
                        dataColumns={userColumns}
                      />
                    }
                  />
                  <Route path=":userId" element={<Edit inputs={userInputs} title="Edit User" />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                </Route>
                <Route path="categories">
                  <Route
                    index
                    element={
                      <List
                        title="categories"
                        dataRows={userRows}
                        dataColumns={userColumns}
                      />
                    }
                  />
                  <Route path=":categoryId" element={<Edit inputs={productInputs} title="Edit Category" />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={productInputs} title="Add New Category" />
                    }
                  />
                </Route>
                <Route path="songs">
                  <Route
                    index
                    element={
                      <List
                        title="songs"
                        dataRows={userRows}
                        dataColumns={userColumns}
                      />
                    }
                  />
                  <Route path=":songId" element={<Edit inputs={productInputs} title="Edit Song"/>} />
                  <Route
                    path="new"
                    element={<New inputs={productInputs} title="Add New Song" />}
                  />
                </Route>
                <Route path="profile" element={<ProfileAdmin />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ThemeContext.Provider>
  );
};

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;
