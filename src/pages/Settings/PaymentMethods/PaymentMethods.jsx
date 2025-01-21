import SettingsNav from "../../../components/SettingsNav/SettingsNav";
import DetailsComp from "../../../components/DetailsComp/DetailsComp";
import IconPlusText from "../../../components/IconPlusText/IconPlusText";
import Input from "../../../components/Input/Input";

import styles from "./PaymentMethods.module.css";
import icons from "../../../resources/icons";

const PaymentMethods = () => {
  const wallets = [
    {
      icon: icons.usdtIcon,
      name: "USDT",
      currency: "USDC TRC20",
      status: false,
    },
    {
      icon: icons.usdcIcon,
      name: "USDC",
      currency: "USDC TRC20",
      status: true,
    },
  ];
  return (
    <div className={styles.container}>
      <SettingsNav />
      <section>
        <ul className={styles.section}>
          {wallets.map((item, index) => (
            <li className={styles.walletItem} key={index}>
              <DetailsComp
                className={styles.detailItem}
                title={
                  <div className={styles.detailItemTitle}>
                    <IconPlusText icon={item.icon}>
                      <div className={styles.walletTitle}>
                        <span className={styles.walletTitleName}>
                          Wallet {item.name}
                        </span>
                        <span className={styles.walletTitleCurrency}>
                          {item.currency}
                        </span>
                      </div>
                    </IconPlusText>
                    {item.status ? null : (
                      <span className={styles.notFilled}>Not Filled</span>
                    )}
                  </div>
                }
              >
                <div className={styles.detailsContent}>
                  <form className={styles.inputs} action="">
                    <Input type="text" placeholder={item.currency}></Input>
                    <Input type="text" placeholder={item.currency}></Input>
                  </form>

                  <div className={styles.buttons}>
                    <button
                      style={{
                        backgroundColor: "#f6ac12",
                        padding: "20.5px 79.5px",
                      }}
                      className={styles.funcButton}
                    >
                      Save
                    </button>
                    <button
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #e2e1dd",
                      }}
                      className={styles.funcButton}
                    >
                      Delete details
                    </button>
                  </div>
                </div>
              </DetailsComp>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PaymentMethods;
