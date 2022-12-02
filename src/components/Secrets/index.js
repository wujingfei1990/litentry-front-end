import React, { useEffect, useState } from 'react'
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { stringToHex } from "@polkadot/util";
import Head from '../Head';
import axios from '../../dataProxy';
import { Input, Button, message as msg, Descriptions } from 'antd';
import './index.css'

function Secrets() {
    let token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
    }
    const [item, setItem] = useState({

    });

    useEffect(() => {
        const load = async () => {
            document.title = 'Secrets';
            const res = await axios.get('/api/v1/secret');
            if (res.code == 10000) {
                setItem(res.data);
            } else {
                msg.error(res.msg)
            }
        }
        load();
    }, []);
    return (
        <>
            <span>刷新页面，获取一条随机secret</span>
            <table className='itemTable'>
                <tr>
                    <th>id</th>
                    <th>secret</th>
                    <th>createdAt</th>
                    <th>updatedAt</th>
                </tr>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.secret}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                </tr>
            </table>
        </>

    );

}
export default Secrets;