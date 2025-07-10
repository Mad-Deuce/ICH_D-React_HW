/** @jsxImportSource @emotion/react */

import { useForm, Controller } from "react-hook-form";
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
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: yupResolver(registerSchema),
    mode: "onSubmit",
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
          <Stack direction="row" spacing={1}>
            {/* <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  // {...register("email")}
                  {...fields.email}
                  error={errors.email}
                  css={inputStyles}
                  sx={{ width: "22rem" }}
                ></TextField>
              )}
            />
            </Controller> */}

            <TextField
              {...register("username")}
              // {...fields.username}
              css={inputStyles}
              sx={{ width: "22rem" }}
            ></TextField>
          </Stack>

          <TextField
            {...fields.text}
            multiline
            rows={4}
            fullWidth
            css={inputStyles}
          ></TextField>
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
      >
        <Button type="submit" variant="contained" css={buttonStyles}>
          Отправить
        </Button>
      </Stack>
    </Container>
  );
};

export default ContactsPage;
