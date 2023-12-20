/* eslint-disable @typescript-eslint/no-explicit-any */
export type Orgazization = {
    ORGANIZATION: string;
    PHONE:  string;
    EMAIL: string;
    CITY: string;
    ACTIVE: string;
    NOOFPROVIDER: string;
    ACTION:any
  };
  

  export type Provider = {
    
    PROVIDER: string;
    ORGANIZATION: string;
    SPECIALIAZATION: string;
    PROVISIONTYPE:  string;
    PROVIDERNUMBER: string,
    STATUS: string,
    FULLNAME: string;
    EMAIL:string,
    MOBILE: string;
    ACTION:any
  };
 
  export type Users = {
    USERNAME: string,
    EMAIL:string,
    PROVISIONTYPE:  string; 
    STATUS: string, 
    ORGANIZATION: string;
    DEPARTMENT: string,
    PROVIDER: string;
    ROLE: string,
    FULLNAME: string;
    MOBILE: string;
    COUNTRY: string,
    ACTION:any


  }