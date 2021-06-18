import React from 'react'
import {Button} from "reactstrap"
import { Link } from 'react-router-dom'
export default function SignedOut() {
    return (
        <div>
            <Link to="/login"><Button>Giriş Yap</Button></Link>
            <Link to="/register"><Button>Kayıt Ol</Button></Link>
        </div>
    )
}
