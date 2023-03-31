import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./myAccount.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumList, loaderChange } from "../../Redux/AlbumSlice";
import CustomLoader from "../../components/common/loader/CustomLoader";
import SearchInput from "../../components/common/SearchInput";
import "./../../scss/input.scss";

// Render Prop
import { Formik, Form, Field, ErrorMessage } from "formik";
const MyAccount = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.Album.albumList);
  const isLoading = useSelector((state) => state.Album.isLoading);
  const [nextCounter, setNextCounter] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredAlbum, setFilteredAlbum] = useState([]);
  useEffect(() => {
    dispatch(loaderChange(true));
    dispatch(getAlbumList());
  }, []);
  console.log(isLoading);
  useEffect(() => {
    dispatch(loaderChange(true));
    dispatch(getAlbumList(nextCounter));
    setTimeout(() => {
      dispatch(loaderChange(false));
    }, 1800);
    // dispatch(loaderChange(false));
  }, [nextCounter]);

  // //search
  useEffect(() => {
    const filter = albums.filter((x) => {
      return x.title.includes(searchFilter);
    });
    setFilteredAlbum(filter);
  }, [searchFilter]);

  const onNext = () => {
    if (nextCounter != 10 && albums) {
      setNextCounter(nextCounter + 1);
    }
  };
  const onPrev = () => {
    if (nextCounter > 1 && albums) {
      setNextCounter(nextCounter - 1);
    }
  };

  const onSearchHandler = (e) => {
    if (e.target.value == "") {
      setSearchFilter("");
    }
    setSearchFilter(e.target.value);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>In MyAccount </h2>
      <br />
      <h3 style={{ textAlign: "center" }}>
        <Link to="/dashboard">Dashboard</Link>
      </h3>
      {/* <input
        placeholder="Search the content..."
        type="text"
        name="text"
        className="input"
        onChange={(e) => onSearchHandler(e)}
      />
      {searchFilter && filteredAlbum && (
        <p>
          {filteredAlbum.length} result{filteredAlbum.length > 1 ? "s" : ""}{" "}
          found
        </p>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={onPrev}
          disabled={
            nextCounter == 1 || isLoading || searchFilter ? true : false
          }
        >
          prev
        </button>
        <span style={{ marginInline: 10 }}>{nextCounter}</span>
        <button
          onClick={onNext}
          disabled={
            nextCounter == 10 || isLoading || searchFilter ? true : false
          }
        >
          next
        </button>
      </div>
      <ul>
        {isLoading ? (
          <CustomLoader />
        ) : searchFilter ? (
          filteredAlbum?.map(({ title, thumbnailUrl, albumId }) => (
            <>
              <li>{albumId}</li>
              <>
                <img src={thumbnailUrl} />
              </>
              <li>{title}</li>
            </>
          ))
        ) : (
          albums?.map(({ title, thumbnailUrl, albumId }) => (
            <>
              <li>{albumId}</li>
              <>
                <img src={thumbnailUrl} />
              </>
              <li>{title}</li>
            </>
          ))
        )}
      </ul> */}

      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email || !values.password) {
              errors.email = "Required";
              errors.password = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("onSubmit");
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default MyAccount;
