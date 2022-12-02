import React, { useEffect, useState } from 'react'
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { stringToHex } from "@polkadot/util";
import Head from '../Head';
import axios from '../../dataProxy';
import { Button, message as msg, Layout, Col, Row } from 'antd';
import { setLocalStorage } from '../../utils/tools';
import './index.css'
const { Header, Footer, Sider, Content } = Layout;


function Signin(props) {
    let token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/';
    }

    const [address, setAddress] = useState(); // 设置账号的状态变量
    const [message, setMessage] = useState(); // 设置账号的状态变量
    const [signature, setSignature] = useState(); // 设置账号的状态变量
    const buttonClick = async () => {
        const extensions = await web3Enable('my cool dapp');
        if (extensions.length === 0) {
            return;
        }
        const allAccounts = await web3Accounts();
        const address = allAccounts[0];
        setAddress(address.address);
        const message = 'Sign-in request for address ' + address.address + '.';
        setMessage(message);

        const injector = await web3FromSource(address.meta.source);
        const signRaw = injector?.signer?.signRaw;
        if (!!signRaw) {
            const { signature } = await signRaw({
                address: address.address,
                data: stringToHex(message),
                type: 'bytes'
            });
            setSignature(signature);
            const res = await axios.post('/api/v1/signin', { address: address.address, message, signature });
            if (res.code == 10000) {
                setLocalStorage('token', res.data);
                window.location.href = '/secrets';
            } else {
                msg.error(res.msg)
            }
        }


    }

    useEffect(() => {
        document.title = 'Login';

    }, []);
    return (
        <>


            <Row>
                <Col span={8}></Col>
                <Col span={8} className='content'><Button type="primary" onClick={buttonClick}>Signin&Login</Button></Col>
                <Col span={8}></Col>
            </Row>


        </>

    );

}
export default Signin;