import Button from "../../../components/Button/Button";
import SettingsNav from "../../../components/SettingsNav/SettingsNav";
import IconPlusText from "../../../components/IconPlusText/IconPlusText";
import Input from "../../../components/Input/Input";
import React from "react";
import * as styles from "./Profile.module.css";
// import "./Profile.module.css";
import icons from "../../../resources/icons";

const Profile = () => {
  const User = {
    icon: "",
    name: "Shagabutdinov Rinal",
    days: 515,
  };
  const Operator = {
    name: "Elena Moskalenko",
    role: " Operator",
    avatar: "",
    work_hours: "Mon-Fri 10:00-20:00",
    socialMedia: {
      telegram: "@nickname",
      email: "info@mail.ru",
      tel: "+7 (999) 999 99-99",
    },
  };
  return (
    <div className={styles.container}>
      <SettingsNav />
      <section>
        <div className={styles.profileContent}>
          <div className={styles.userWindow}>
            <div className={styles.userInfo}>
              <div className={styles.userInfoPadding}>
                <div className={styles.user}>
                  <h3 className={styles.userName}>{User.name}</h3>
                  <span className={styles.userDate}>
                    On the platform _ years {User.days} month
                  </span>
                  <span className={styles.formAccountType}>Account type</span>
                </div>

                <div className={styles.formWindow}>
                  <form className={styles.formContent} action="" method="get">
                    <div className={styles.formItem}>
                      <Input
                        labelTitle="Phone number"
                        type="tel"
                        name="phonenumber"
                        placeholder="+7 (999) 999 99-99"
                      ></Input>
                      <Input
                        labelTitle="E-mail Address"
                        type="email"
                        name="email"
                        placeholder="example@email.ru"
                      ></Input>
                    </div>

                    <div className={styles.formItem}>
                      <Input
                        labelTitle="WhatsApp"
                        type="tel"
                        name="whatsapp"
                        placeholder="+7 (999) 999 99-99"
                      ></Input>

                      <Input
                        labelTitle="Telegram"
                        type="email"
                        name="telegram"
                        placeholder="@example"
                      ></Input>
                    </div>
                  </form>
                </div>
                <div className={styles.buttonContent}>
                  <Button
                    style={{
                      width: "100%",
                      maxWidth: "509px",
                      maxHeight: "50px",
                    }}
                  >
                    Save
                  </Button>
                  <span>
                    Last changes date: {"Last changes date: 31.03.2023 13:44"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.operatorWindow}>
            <div className={styles.operatorInfo}>
              <div className={styles.operatorAvatar}>
                <IconPlusText icon={Operator.avatar} alt="OperatorAvatar">
                  <div className={styles.operatorName}>
                    <span className={styles.operatorNameStyle}>
                      {Operator.name}
                    </span>

                    <span className={styles.operatorRoleStyle}>
                      {Operator.role}
                    </span>
                  </div>
                </IconPlusText>
              </div>
              <div className={styles.operatorSocialMedia}>
                <IconPlusText
                  style={{ gap: "15px" }}
                  icon={icons.socialTelegram}
                  alt="OperatorTelegram"
                >
                  <span>{Operator.socialMedia.telegram}</span>
                </IconPlusText>
                <IconPlusText
                  style={{ gap: "15px" }}
                  icon={icons.socialEmail}
                  alt="OperatorEmail"
                >
                  <span>{Operator.socialMedia.email}</span>
                </IconPlusText>
                <IconPlusText
                  style={{ gap: "15px" }}
                  icon={icons.socialPhone}
                  alt="OperatorPhone"
                >
                  <span>{Operator.socialMedia.tel}</span>
                </IconPlusText>
              </div>
              <div className={styles.workHours}>
                <span className={styles.workingHoursStyle}>Working hours:</span>
                <span className={styles.HoursStyle}>{Operator.work_hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
