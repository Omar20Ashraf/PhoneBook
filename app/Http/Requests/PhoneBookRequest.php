<?php

namespace App\Http\Requests;

use App\Models\PhoneBook;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class PhoneBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name' => 'required|string|max:225',
            'phone' => 'required|string|max:225',
            'email' => ['required','email',Rule::unique(PhoneBook::class)],
        ];
    }
}
