/** @jsxImportSource @emotion/react */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";

import {
  SnapchatIcon,
  XIcon,
  FacebookIcon,
} from "/src/shared/components/icons";

import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { defaultValues, fields, registerSchema } from "./form-fields.js";

import { textStyles, inputStyles, buttonStyles } from "./ContactsPageStyles";

const ContactsPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <Container>
      <SectionTitle>Контакты</SectionTitle>
      <Typography css={textStyles}>- 8 800 000 00 00</Typography>
      <Typography css={textStyles}>- email@example@email.com</Typography>
      <Stack direction="row" spacing={2} sx={{ marginTop: "4rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                {...register("email")}
                {...fields.email}
                error={errors.email}
                helperText={errors.email?.message}
                css={inputStyles}
                sx={{ width: "22rem" }}
              />
              <TextField
                {...register("username")}
                {...fields.username}
                error={errors.username}
                 helperText={errors.username?.message}
                css={inputStyles}
                sx={{ width: "22rem" }}
              />
            </Stack>

            <TextField
              {...register("text")}
              {...fields.text}
              error={errors.text}
               helperText={errors.text?.message}
              multiline
              rows={4}
              fullWidth
              css={inputStyles}
              sx={{ marginBottom: "2rem" }}
            />
          </Stack>
          <Stack direction="row" justifyContent="end">
            <Button type="submit" variant="contained" css={buttonStyles}>
              Отправить
            </Button>
          </Stack>
        </form>
        <Box sx={{ paddingInline: "4rem" }}>
          <Typography
            sx={{ textAlign: "center", padding: "2rem" }}
            css={textStyles}
          >
            Найдите нас:
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"https://www.snapchat.com/"}>
              <SnapchatIcon />
            </Link>
            <Link to={"https://www.facebook.com"}>
              <FacebookIcon />
            </Link>
            <Link to={"https://x.com"}>
              <XIcon />
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "2rem",
        }}
      ></Stack>
    </Container>
  );
};

export default ContactsPage;
