# Location

Send and receive locations are common in modern instant messaging apps. In Messenger we use location services from different providers: Google, OEM like Huawei, third-party like Tencent or Facebook. As extension developers, you don't need to pay attention to it.

We provide the interface of a location message. If you received a location message, you should just add it into the database. If you need to send a location to your friends, you should call `LocationCapability#getLocation` to fetch latitude and longtitude.
