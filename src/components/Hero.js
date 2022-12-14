import styled from 'styled-components';
import BgImg from '../assets/bg-image.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

//Link to other site/page
const Button = styled.a`    
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        <motion.p
                            variants={fadeLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 1 }}
                        >
                            Get 2 FREE Stocks <br /> valued up to $1850!
                        </motion.p>    
          </Title>
                    <Desc>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </motion.p> 
          </Desc>
                    <Button href='https://www.google.com.ua/?hl=ua' target='_blank'>
                        <span>Claim your free stocks now</span>
                        <MdKeyboardArrowRight />
                    </Button>
                </Left>
            </Content>
        </Section>
    );
};

export default Hero;
