import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getSearchField } from "../../actions/searchSurah";

const mapStateToProps = (state) => {
  return {
    items: state.surahs.items,
    error: state.surahs.error,
    loading: state.surahs.loading,
  };
};

const SearchBox = (props) => {
  const [open, setOpen] = React.useState(false);
  const loading = open && props.loading;

  // handle input manual change
  const handleChange = (event) => {
    props.dispatch(getSearchField(event.target.value));
  };

  // handle input auto change
  const handleInputChange = (event, value) => {
    props.dispatch(getSearchField(value));
  };

  return (
    <Autocomplete
      id="search-box"
      style={{ width: 463 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) =>
        option.englishName === value.englishName
      }
      getOptionLabel={(option) => option.englishName}
      options={props.items}
      loading={loading}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="search surah"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default connect(mapStateToProps)(SearchBox);
