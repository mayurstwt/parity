"use client"

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const ProductDetailsSchema = z.object({
    name: z.string().min(1, "Required"),
    url: z.string().min(1, "Required"),
})

function ProductDetailsForm() {
    const form = useForm<z.infer<typeof ProductDetailsSchema>>({
        resolver: zodResolver(ProductDetailsSchema),
    })

    function onSubmit(values: z.infer<typeof ProductDetailsSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-6 flex-col'>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='url'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enter your Website URL</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Include the protocol and the full path to the sales page.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}

export default ProductDetailsForm