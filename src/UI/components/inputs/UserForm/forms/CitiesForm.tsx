import { Autocomplete, CircularProgress, Typography } from "@mui/material";
import { CidadeInterface } from "data/@types/EnderecoInterface";
import useCitiesForm from "data/hooks/components/inputs/UserForm/forms/useCitiesForm";
import { CitiesSelecion } from "../UserForm.styled";
import TextField from "UI/components/inputs/TextField/TextField";
import ChipField from "UI/components/data-display/ChipField/ChipField";

export const CitiesForm: React.FC<{ estado: string }> = ({ estado }) => {
  const { options, handleNewCity, citiesList, citiesName, handleDelete } =
    useCitiesForm(estado);
  return <CitiesSelecion></CitiesSelecion>;
};
