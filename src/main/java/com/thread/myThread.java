package com.thread;

import snmp.GetOID;

public class myThread implements Runnable {


	public void run() {
		// TODO Auto-generated method stub
        try {
			GetOID.GetRemoteMessage();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
