"use client";
import { formSchema } from "@/types";
import uuid4 from "uuid4";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CategoryItems,
  DurationItems,
  LanguageItems,
  LevelItems,
  VideoItems,
} from "@/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeaderContent from "../_components/HeaderContent";
import { useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createCourseContent } from "../actions/createCourse";

const CreateCoursePage = () => {
  const [isPending, startTransition] = useTransition();
  const { user } = useUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: "",
      category: "",
      topic: "",
      description: "",
      level: "",
      duration: "",
      video: "",
      numOfChapters: 0,
    },
  });

  function onSubmit(UserInput: z.infer<typeof formSchema>) {
    startTransition(async () => {
      if (!user) return;

      const courseId = uuid4();

      const createdBy = user?.primaryEmailAddress?.emailAddress || "no email";
      const userName = user?.fullName || "no name";
      const userProfileImage = user?.imageUrl || "/.placeholder.png";

      try {
        await createCourseContent({
          courseId,
          createdBy,
          userName,
          userProfileImage,
          ...UserInput,
        });
        router.push(`/create-course/${courseId}`);
      } catch (error) {
        console.error("Failed to create course", error);
      }
    });
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <HeaderContent leftsideTitle="Create" rightsideTitle="New Course" />
      <div className="mt-8 border-2 bg-white p-8 rounded-lg shadow-lg lg:min-w-[900px] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* {Language} */}
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Please select the language for the course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {LanguageItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 gap-5">
              {/* {Category} */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Please select a category for the course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CategoryItems.map((item) => (
                          <SelectItem key={item.label} value={item.values}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {Topic} */}
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Please enter a topic for the course (eg: python, typescript...)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* {Level} */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Please select a level for the course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LevelItems.map((item) => (
                          <SelectItem key={item.label} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {Duration} */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Please select a duration for the course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {DurationItems.map((item) => (
                          <SelectItem key={item.label} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {Video} */}
              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video ?</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Please select a video status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {VideoItems.map((item) => (
                          <SelectItem key={item.label} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {numOfChapters} */}
              <FormField
                control={form.control}
                name="numOfChapters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Chapters</FormLabel>

                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder="Please enter a number of chapters for the course"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* {Description} */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description <span className="italic">(optional)</span>
                  </FormLabel>

                  <FormControl className="min-h-40">
                    <Textarea
                      {...field}
                      placeholder="Please enter a description for the course so the AI tool can create the most suitable course for you"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-myPrimary hover:bg-myPrimary/80"
              type="submit"
            >
              {isPending ? "Creating..." : "Create Course Layout"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
