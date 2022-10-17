import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { HStack, View, Button, Input, Box, Pressable, Center,Text } from "native-base";
import { useForm, Controller } from "react-hook-form";


const { height, width } = Dimensions.get("window");
const smallDev = width < 800;

const Forminput = (props) => {
  const [shadow, setShadow] = useState(false);
  const shad = () => {
    setShadow(true);
  };
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View>
      {smallDev ? (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box >
          <input type={"text"} placeholder="Name" {...register("Name", { required: true })} className="input_small" />
          {errors.Name ? <Text fontSize={"2xs"} color={"red.500"} ml={2}>*This field is required</Text>:<Box m={1}></Box>}
          </Box>
          <Box>
          <input type={"text"} placeholder="Email"  {...register("Email", { required: true,pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"invalid email"} })} className="input_small" />
          {errors.Email ? <Text fontSize={"2xs"} color={"red.500"}  ml={2}>{errors.Email.message?"*invalid Email":"*This field is required"}</Text>:<Box m={1}></Box>}
          </Box>
          <Box>
          <textarea rows={4} placeholder="Message" {...register("Message", { required: true })} className="input_small textarea_small" />
          {errors.Message ? <Text fontSize={"2xs"} color={"red.500"}  ml={2}>*This field is required</Text>:<Box m={1}></Box>}
          </Box>
          <Box width={width*0.70} m={2} borderColor={"#7D2BE9"} borderStyle={"solid"} borderWidth={2} borderRadius={25} padding={3}>
          <Center>
          <input type={"submit"} value={"Send Message"} className="submit"/>
          </Center>
          </Box>
          </form>
        </>
      ) : (
        <>
          <Center>
            <form onSubmit={handleSubmit(onSubmit)}>

          <Box>
          <HStack>
           <Box m={2}>
           <input type={"text"} placeholder="Name" autoComplete="off"  {...register("Name", { required: true })} className={errors.Name?"input-error":"input capitalize"}/>
           {errors.Name ? <Text fontSize={"2xs"} color={"red.500"}>*This field is required</Text>:<Box m={1}></Box>}
           </Box>
           <Box m={2}>
           <input type={"text"} {...register("Email", { required: true,pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"invalid email"} })} placeholder="Email" autoComplete="off" className={errors.Name?"input-error":"input"} />
           {errors.Email ? <Text fontSize={"2xs"} color={"red.500"}>{errors.Email.message?"*invalid Email":"*This field is required"}</Text>:<Box m={1}></Box>}
           </Box>
          </HStack>
          </Box>
         <Box m ={2}>
         <textarea rows={4} {...register("Message", { required: true })} placeholder="Message" autoComplete="off" className={errors.Message?"input-error":"input"} />
         {errors.Message ? <Text fontSize={"2xs"} color={"red.500"}>*This field is required</Text>:<Box m={1}></Box>}
         </Box>
         
            <Box m={2} borderColor={"#7D2BE9"} borderStyle={"solid"} borderWidth={2} borderRadius={25} padding={3} width={width*0.20}>
           <Center>
           <input type={"submit"} value={"Send Message"} className="submit"/>
           </Center>
            </Box>
         
            </form>
          </Center>
        </>
      )}
    </View>
  );
};

export default Forminput;
