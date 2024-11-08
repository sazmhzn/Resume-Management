import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputTag from "@/components/common/InputTags";
import { useState } from "react";

const jobTagsSchema = z.array(z.string());

const JobFormSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  email: z.string().email("Invalid email format"),
  jobTags: jobTagsSchema,
  jobType: z.enum(["Full Time", "Part Time", "Internship"]),
  experience: z.coerce.number().min(0, "Experience must be a positive number"),
  minimumSalary: z.coerce
    .number()
    .min(0, "Minimum salary must be a positive number"),
  maximumSalary: z.coerce
    .number()
    .min(0, "Maximum salary must be a positive number"),
  description: z.string().min(1, "Description is required"),
  // region: z.enum(["New York", "London", "Los Angeles"]),
  // location: z.string().min(1, "Location is required"),
});

const JobForm = () => {
  const [jobTags, setJobTags] = useState([]);

  const form = useForm<z.infer<typeof JobFormSchema>>({
    resolver: zodResolver(JobFormSchema),
    defaultValues: {
      jobTitle: "",
      jobTags: jobTags,
      jobType: "Full Time",
      experience: 0,
      minimumSalary: 0,
      maximumSalary: 0,
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof JobFormSchema>) => {
    console.log("Form submitted:", { ...values, jobTags });
  };

  return (
    <main className="">
      <div className="p-0">
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white uppercase">
                Job Information
              </h3>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="mt-4 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="shadcn"
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="jobTags"
                  render={({ field }) => (
                    <FormItem className="w-full my-2">
                      <FormLabel>Job Tags</FormLabel>
                      <FormControl>
                        <InputTag
                          tags={jobTags}
                          setTags={setJobTags}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="my-2 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="jobType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Job Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                              <SelectValue placeholder="Select a job type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Full Time">Full time</SelectItem>
                            <SelectItem value="Part Time">Part time</SelectItem>
                            <SelectItem value="Internship">
                              Internship
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-2 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="minimumSalary"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Minimum Salary</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="8,000"
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="maximumSalary"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Maximum Salary</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder=""
                          {...field}
                          className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button>Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobForm;
