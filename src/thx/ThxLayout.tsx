import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "4491_get_real_sub", {
      variant_name: "4491_4",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании. Вы – наш герой!
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          К сожалению, сейчас сервис Wink не входит в подписку. Но все остальные
          преимущества доступны — получайте больше кэшбэка, экономьте на
          комиссиях и не только.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="https://alfa.me/strGH" onClick={submit}>
          Оформить подписку
        </ButtonMobile>
      </div>
    </>
  );
};
